# Marco-Polo
A CICD Example in NodeJS, Docker and Jenkins Pipelines

# Steps
1. create git repo
2. clone locally
3. install node
4. npm init
5. npm install express, mocha, request, supertest, pm2
6. create test/test.js
7. Run npm test (should fail)
8. Implement app.js
9. Run npm test (should pass)
10. Create jenkins job
11. Create github webhook
12. create jenkinsfile, add unit test stage, steps
13. Create dockerfile, dockerignore, add packaging stage
14. Add deployment stage
15. Create integration tests
16. Create integartion test stage in jenkins file
17. Repeat for other environments


# Bonus Pipeline Example
1. Take integration tests stage, replicate into synthetic monitors at the endpoint
2. Use pipeline syntax for post/failure to trigger remediation actions if tests fail
3. Retrigger the synthetic monitor

# Future Enchancements
1. Deployment to AWS/ECS, etc
2. Deployment to Artifactory/DockerHub
3. Pipeline gating
4. Security Scanning
5. Pull requests for triggering builds