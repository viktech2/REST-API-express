const assert = require('chai').assert;
//const app = require('../app');


describe.only('add()', function () {

    beforeEach(done => {
        //this.timeout(1000);
        done();
    });

    var tests = [{
            args: [1, 2],
            expected: 3
        },
        {
            args: [1, 2, 3],
            expected: 6
        },
        {
            args: [1, 2, 3, 4],
            expected: 10
        }
    ];

    tests.forEach(test => {
        it('correctly adds ' + test.args.length + ' args', (done) => {
            var sum = test.args.reduce((a, b) => a + b, 0);
            //console.log(sum, test.expected);
            assert.equal(sum, test.expected, 'sum is not equal as expected!');
            done();
        });

    });
});