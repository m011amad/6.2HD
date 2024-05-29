pipeline {
    agent any
    tools {
        nodejs 'node'
    }
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

        stage('Quality Check') {
            steps {
                script {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        sh 'npm run quality'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm start &'
                    sh 'npm test'
                }
            }
        }

        stage('Deploy to staging') {
            steps {
                script {
                    sh "curl 'https://api.render.com/deploy/srv-cpbk6rdds78s73f1fqgg?key=CShDTTdzRqM'"
                }
            }
        }
        stage('Deploy to production') {
            steps {
                script {
                    sh "curl 'https://api.render.com/deploy/srv-cpbi8ktds78s73f06mj0?key=v_uFivd4nMg'"
                }
            }
        }
    }
}
