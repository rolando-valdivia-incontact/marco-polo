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
        stage('Packaging') {
            steps {
                sh 'echo packaging...'
            }
        }
        stage('Deploying Infra') {
            steps {
                //withCredentials()
                //cfnUpdate()
                sh 'echo deploying...'
                sh 'node app.js '
            }
        }
        stage('Integration Tests') {
            steps {
                //withCredentials()
                sh 'npm test integrationtest/integrationtest.js'
            }
        }
        stage('Teardown') {
            steps {
                sh 'kill $(ps -a | grep "node app.js" | head | cut -c1-5)'
            }
        }
    }
}