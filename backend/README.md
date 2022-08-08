# Rest API for Sending Email
###  Directory layout

## Backend - Node.JS app
    �   +-- controllers         # Controllers, get the data
	�   +-- helpers             # Helpers
    �   +-- middleware          # Middleware: validations
    �   +-- routes              # Routes for REST services
    �   +-- common              # common files and utilities
    �   +-- service             # services
    �   +-- test                # folder for testing
    �   +-- common             # common files and utilities
    �   +-- common             # common files and utilities
	
## Install
 run ```npm i ``` command and then run ```npm run dev```

 ## Manual Docker Build:
 run following commands to build docker image which can be pushed to ECR aws or docker hub and can be used in Kubernetes or ECS.
  
 ```docker build . -t <your username>/node-web-app```

 to run docker image locally 

 ```docker run -p 3000:3000 -d <your username>/node-web-app```

Push to aws ECR

```docker tag {{imagename}} aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag```

and finally push to ECR

```docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-repository:tag```

for CI/CD we can use aws ci/cd pipeline.

## run Test
i have written integration tests only, but using jest and mocking i can write unit tests.
run test
```npm run test```