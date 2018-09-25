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
            }
        }
        stage('Integration Tests') {
            steps {
                //withCredentials()
                sh 'mocha test/integrationtest.js'
            }
        }
    }
}