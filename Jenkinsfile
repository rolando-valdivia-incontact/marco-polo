pipeline {
    agent any
    stages {
        stage('Prereqs') {
            steps {
                sh 'npm install --save-dev mocha chai express supertest'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}