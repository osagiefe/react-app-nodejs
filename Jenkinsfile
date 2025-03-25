pipeline {
  agent any
  
   tools {nodejs "node"}
    
  stages {
    stage("Clone code from GitHub") {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/osagiefe/react-app-nodejs.git'
                }
            }
        }
     
    stage('React App NodeJS Build') {
      steps {
        sh 'npm install'
      }
    }
  
     stage('Build React App NodeJS Image') {
            steps {
                script {
                  sh 'docker build -t osagiefe/react-apt-1.0 .'
                }
            }
        }


        stage('Push React App NodeJS Image to DockerHub') {
            steps {
                script {
                 withCredentials([string(credentialsId: 'FelixID', variable: 'FelixID')]) {
                    sh 'docker login -u osagiefe -p ${FelixID}'
            }
            sh 'docker push osagiefe/react-apt-1.0'
        }
            }   
        }
         


  }
}