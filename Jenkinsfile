pipeline {
    agent {
        docker { image 'usemtech/nodejs' }
    }
    stages {
        stage('Unit Tests') {
            steps {
                sh 'mocha test.js'
            }
        }
    }
}