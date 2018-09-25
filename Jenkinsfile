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
                sh 'node node_modules/.bin/mocha'
                sh 'npm test'
            }
        }
    }
}