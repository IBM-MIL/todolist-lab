## mytodolistbff

Backend for Frontend (BFF) project with ExpressJS on NodeJS

[![](https://img.shields.io/badge/bluemix-powered-blue.svg)](https://bluemix.net)
![Platform](https://img.shields.io/badge/platform-NODE-lightgrey.svg?style=flat)

### Table of Contents
* [Summary](#summary)
* [Requirements](#requirements)
* [Configuration](#configuration)
* [Run](#run)

### Summary

The Backend for Frontend pattern, commonly known as BFFs, helps you focus on exposing business data and services in a form that matches the user interaction requirements. For instance, to optimize a user journey to your cloud solution, it may require a different user journey for the mobile application but a richer, more detailed journey for the Web application. With Bluemix, you can build a BFF by using polyglot programming approach to define the BFF- using Node.js, Swift, or Java. The BFF service exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

 
This BFF application is configured to connect to the following services:
 
 
- [Cloudant](https://console.ng.bluemix.net/catalog/services/cloudant-nosql-db/)
 
 
### Requirements
#### Local Development Tools Setup (optional)

- Install the latest [NodeJS](https://nodejs.org/en/download/) 6+ LTS version.

#### Bluemix development tools setup (optional)

1. Install [Docker](http://docker.io) on your machine.
2. Install the [Bluemix CLI](https://console.ng.bluemix.net/docs/cli/index.html)
3. Download the [Bluemix developer tools plugin](https://plugins.ng.bluemix.net/ui/repository.html#bluemix-plugins)
4. Go to the directory you downloaded the image to, and install the plugin with:

  `bx plugin install <name-of-the-dev-plugin>`

#### IBM Bluemix DevOps setup (optional) 

[![Create Toolchain](https://console.ng.bluemix.net/devops/graphics/create_toolchain_button.png)](https://console.ng.bluemix.net/devops/setup/deploy/)

[IBM Bluemix DevOps](https://www.ibm.com/cloud-computing/bluemix/devops) services provides toolchains as a set of tool integrations that support development, deployment, and operations tasks inside Bluemix. The "Create Toolchain" button creates a DevOps toolchain and acts as a single-click deploy to Bluemix including provisioning all required services. 

***Note** you must publish your project to [Github](https://github.com/) for this to work.

### Configuration

The project contains Bluemix specific files that are used to deploy the application as part of a Bluemix DevOps flow. The `.bluemix` directory contains files used to define the Bluemix toolchain and pipeline for your application. The `manifest.yml` file specifies the name of your application in Bluemix, the timeout value during deployment, and which services to bind to.

Credentials are either taken from the VCAP_SERVICES environment variable if in Bluemix, or from the config file if running locally `./vcap-local.js`. 


### Run
#### Using Bluemix development CLI
The Bluemix development plugin makes it easy to compile and run your application if you do not have all of the tools installed on your computer yet. Your application will be compiled with Docker containers. To compile and run your app, run:

```bash
bx dev run
```

Your application will be running at `http://localhost:8080/`.

Native npm modules installed on one architecture will not work on another. The included Docker images are based on the Linux kernel. If you want to run through Docker and locally, you must delete the `node_modules/` folder and run `bx dev run` again.


#### Using a local development environment


#### Endpoints

Your application is running at: `http://localhost:8080/` in your browser.

- Your [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/explorer`
- Your Swagger definition is running on: `/swagger/api`
- Health endpoint: `/appmetrics-dash`
