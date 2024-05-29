pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/m011amad/6.2HD.git'
            }
        }

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
                    sh './deploy.sh'
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    def version = sh(script: 'node -p "require(\'./package.json\').version"', returnStdout: true).trim()
                    sh "git tag v${version}"
                    sh 'git push origin --tags'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
