pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh "curl 'https://api.render.com/deploy/srv-cpbi8ktds78s73f06mj0?key=v_uFivd4nMg'"
                }
            }
        }
    }
}
