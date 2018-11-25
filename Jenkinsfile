pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Cloning git') {
      steps {
       git 'https://github.com/viktech2/REST-API-express.git'
      }
    }
    
    stage('Installing dependencies'){
        steps {
            sh 'npm install'
        }
    }
    
    stage('Test'){
        steps {
            sh 'npm test'
        }
    }
  }
}