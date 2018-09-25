pipeline {
    agent any
    stages {
        stage('Prereqs') {
            sh 'npm install mocha chai express'
        }
        stage('Unit Tests') {
            steps {
                sh 'mocha test.js'
            }
        }
    }
}