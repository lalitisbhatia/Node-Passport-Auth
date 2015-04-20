Authentication application using Node and Passport

# MEAN - MONGO/EXPRESS/ANGULAR/NODE Stack

This is a basic signup and authentication application built on the MEAN stack and using
the passport package for authentication. Based on scotch.io tutorial with enhancements.
This applicaiton supports authentication strategies for :
- local
- facebook
- google
- twittier

## Features

- Full test suite using Mocha framework
- Authenticated tests using supertest agent
- support for forgot/reset password. Email using nodemailer
- Mongodb configured to use an independent instance for tests
- FB/Twitter/Google apps configured per environment
- Uses Grunt task runner to start dev instance, running all the tests
- Fully responsive UI using Bootstrap 3
- mobile app style navigation
- NODE APIs called using angular $http service
- UI fully templated for ease of reuse
- Shows use of angular UI-Routing including cub-states

## Improvements needed
- Remove refence to angular controllers from the templates to the ui-route config
- Add tests for angular controllers
- Add e2e tests
- Add grunt build. Currently deploying to heroku which takes care of optimization
-

First, make sure you have the necessary dependencies installed:

- [NodeJS](http://nodejs.org/)
  > We suggest using [nvm](https://github.com/creationix/nvm) to install and manage node
  >

- [MongoDB](http://www.mongodb.org/downloads)

- to bring up the local instance, run "sh ./rundev.sh"