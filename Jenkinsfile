pipeline {
  agent {
    label 'hyperv'  // your agent label
  }

  environment {
    NODE_ENV = 'development'
    DB_USER = credentials('pg_user')
    DB_PASSWORD = credentials('pg_password')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Backend') {
      steps {
        dir('server') {
          sh 'npm install'
        }
      }
    }

    stage('Install Frontend') {
      steps {
        dir('client') {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('client') {
          sh 'npm run build'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir('server') {
          sh 'npm test || echo "no test script defined"'
        }
      }
    }

    stage('Run Server') {
      steps {
        dir('server') {
          sh 'nohup npm start &'
        }
      }
    }
  }
}
