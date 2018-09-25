pipeline {
    agent any
    stages {
        stage('Prereqs') {
            steps {
                sh 'npm install --save-dev mocha chai express'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}