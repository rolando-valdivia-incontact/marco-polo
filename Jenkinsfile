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
                sh 'docker build -t bnelford/marco-polo-node .'
            }
        }
        stage('Deploying Infra') {
            steps {
                sh 'echo deploying infra...'
                withEnv(['JENKINS_NODE_COOKIE=dontKillMe']) {
                    sh 'docker run -d -p 46141:3000 --name marco-polo bnelford/marco-polo-node:latest'
                }
                
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
        always {
            sh 'Removing containers...'
            //sh 'docker kill marco-polo'
            //sh 'docker rm marco-polo'
        }
    }
}