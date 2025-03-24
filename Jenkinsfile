pipeline {
  agent any
  stages {
    stage("Clone code from GitHub") {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/osagiefe/react-app-nodejs.git'
                }
            }
        }
    stage('Nodejs as Node'){
        steps{
            nodejs('Node')
        }
    }

     
    stage('React-app Node JS Build') {
        steps {
        sh 'npm install'
      }
    }
  
     stage('Build React-app Node JS Docker Image') {
            steps {
                script {
                  sh 'docker build -t osagiefe/react-app-nodejs-1.0 .'
                }
            }
        }


        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                 withCredentials([string(credentialsId: 'FelixID', variable: 'FelixID')]) {
                    sh 'docker login -u osagiefe -p ${FelixID}'
            }
            sh 'docker push osagiefe/react-app-nodejs-1.0'
        }
            }   
        }
         


  }
}