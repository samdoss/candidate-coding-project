candidate-coding-project
===========

RESTful API exercise.

## Technologies
**NodeJS:** "It is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices." ([link](http://nodejs.org/))

**Database:** To keep the project simple, no database is used. Data is coming from the files under ```/dummy-data``` folder.

## Libraries, Frameworks
**HapiJS:** "Server Framework for Node.js." ([link](http://www.hapijs.com))

**JSPath:** "It is a domain-specific language (DSL) that enables you to navigate and find data within your JSON documents. Using JSPath, you can select items of JSON in order to retrieve the data they contain." ([link](https://github.com/dfilatov/jspath))

## Deployment
**AppFog** - PaaS Provider, created Node.js 0.10.22 instance. ([link](https://docs.appfog.com/languages/node))

## Endpoints
**API Url:** http://candidate-coding-project.aws.af.cm

```
////////////////////////////////////////////////////////////
// PRODUCTS
////////////////////////////////////////////////////////////
GET     /products           -- get all the products
GET     /products/{id}      -- get the product with given ID
PUT     /products           -- create a new product
POST    /products/{id}      -- update the existing product
DELETE  /products/{id}      -- delete the product with given ID
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// ORDERS
////////////////////////////////////////////////////////////
GET     /orders                 -- get all the orders
GET     /orders/{id}            -- get the order with given ID
GET     /orders/{id}/products   -- get the products of the order with given ID
PUT     /orders                 -- create a new order
POST    /orders/{id}            -- update the existing order
DELETE  /orders/{id}            -- delete the order with given ID
////////////////////////////////////////////////////////////
```

## Local Installation
- Install Node.js ([download](http://nodejs.org/))
- Download 'candidate-coding-project' files.
- Open Node.js console, cd to project main folder.
- Execute the following command:
 - ```npm install``` 
 - This will install the project dependencies (such as JSPath)
- Then execute the following command:
 - ```node app```
 - This will start the Node.js server on your local machine.
- Go to: ```http://localhost:8000/```
 - You should be able to see the status message: ```status: true;```

## Contact

 - Selman Kahya - ([website](http://www.selmanh.com)) - (hey@selmanh.com)
