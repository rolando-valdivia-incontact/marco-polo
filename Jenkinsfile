pipeline {
    agent any
    stages {
        stage('Prereqs') {
            steps {
                sh 'npm install --save-dev mocha express supertest'
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
                sh 'echo deploying infra...'
            }
        }
        stage('Deploying Application') {
            steps {
                sh 'echo deploying app...'
                sh 'pm2 start app.js '
            }
        }
        stage('Integration Tests') {
            steps {
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