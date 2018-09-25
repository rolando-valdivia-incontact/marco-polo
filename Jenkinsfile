pipeline {
    agent {
        docker { image 'docker pull usemtech/nodejs-mocha' }
    }
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