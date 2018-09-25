pipeline {
    agent {
        docker { image 'docker pull usemtech/nodejs-mocha' }
    }
    stages {
        stage('Unit Tests') {
            steps {
                sh 'mocha test.js'
            }
        }
    }
}