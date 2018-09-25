pipeline {
    agent any
    stages {
        stage('Prereqs') {
            steps {
                sh 'npm install'
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
                sh 'docker build -t bnelford/marco-polo-node .'
            }
        }
        stage('Deploying Infra') {
            steps {
                sh 'echo deploying infra...'
                sh 'docker run -d -p 3000:3000 --name marco-polo bnelford/marco-polo-node:latest'
            }
        }
        //stage('Deploying Application') {
            //steps {
                //sh 'echo deploying app...'
                //sh 'pm2 start app.js '
            //}
        //}
        stage('Integration Tests') {
            steps {
                sh 'npm test integrationtest/integrationtest.js'
            }
        }
    }
    post {
        cleanup {
            sh 'echo Removing containers...'
            sh 'docker kill marco-polo'
            sh 'docker rm marco-polo'
        }
    }
}