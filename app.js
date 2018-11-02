const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.set('port', (process.env.PORT || 3000));

const courses = [{
        id: 1,
        name: "Course1"
    },
    {
        id: 2,
        name: "Course2"
    },
    {
        id: 3,
        name: "Course3"
    }
];

// GET- get all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// GET- get course by id
app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) return res.status(404).send('Course with given id is not found!');

    res.send(course);
});

//POST-  add new course 
app.post('/api/courses/', (req, res) => {

    const {
        error
    } = validateCourseName(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }

    let newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(newCourse);
    res.send(newCourse);

});

//PUT-  update course 
app.put('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) return res.status(404).send('Course with given id is not found!');

    const result = validateCourseName(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return
    }

    course.name = req.body.name;
    res.send(course);

});

// DELETE - delete course 
app.delete('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) return res.status(404).send('Course with given id is not found!');

    const index = courses.indexOf(course);
    console.log(index);

    courses.splice(index, 1);

    res.send(course);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(app.get('port'), () => {

    console.log(`App is running at ${app.get('port')}`);
});

function validateCourseName(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}