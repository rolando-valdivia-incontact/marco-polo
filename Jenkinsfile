pipeline {
    agent any
    stages {
        stage('Prereqs') {
            steps {
                sh 'npm install --save-dev mocha chai express supertest pm2@latest'
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
                sh 'pm2 start app.js '
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
                sh 'pm2 stop all'
            }
        }
    }
}