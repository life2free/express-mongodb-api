# JSON Api

Build a JSON Api using Express and Mongoose.

## Description

The Api provides CRUD (including create, read, update, delete ) functionality with RESTful routes. The data which api manipulate is retrieved form the public api ( [News Api](https://newsapi.org/) ) and seed to local MongoDB.

## Technical Utilizes

1. NodeJs
2. Express
3. MongoDB & Mongoose

## Api Documentation

1. News API is a simple HTTP REST API for manipulating (create, read, update, delete) news. You can search for news with any combination of the following criteria:

   - author. Eg: find all news that its author containing the word 'catherine'.
   - title. Eg: find all news that its title containing the word 'financial'.
   - description. Eg: find all news that its description containing the word 'financial'.
   - content. Eg: find all news that its content containing the word 'financial'.
   - Date published. Eg: find all news published on "2020-03-31".

2. News API has two endpoints: News and Source. To learn about specific endpoints to access, check out the documentation for this API [here](https://life2free.github.io/express-mongodb-api/doc/index.html). The entrance url of the API on [Heroku]().

   - News is the main endpoint, which can be used to manipulate the news.

   - Source is a minor endpoint, which can be used to manipulate the publishers of news.

## Use Instructions

You can use the API in two way:

1. Use the published API. The API already be published on [Heroku]().
2. Clone this project and run on local machine, use the api on local server. The following instructions will give you guidance how to get a copy of the project and run the api on your local machine.

### Installing

1. Go ahead and create/change into a new directory, then clone down this project to your local machine and go into the project folder.
2. Install the dependencies with the following command:

```
    npm i express mongoose node-fetch body-parser
```

### Prepare data

1. Navigate into your cloned directory and get the online data (comes from newsapi.org) with following command:

```
    node lib/db/fetchdata.js
```

- You should be able to find the data in lib/db/newss.json and lib/db/sources.json

2. Seed the data ( which in lib/db/newss.json and lib/db/sources.json ) to your local MongoDB with following command:

```
   node lib/db/seed.js
```

- After you seed, you will be able to find the data in your local MongoDB. You can follow the following steps to check the data.
  - Run the following commands to start MongoDB and check data in a seperate terminal:

```
    mongo  //start up the MongoDB
```

```
    show dbs  //you will find the database named "newss"
```

```
    use newss
```

```
    show collections  //you will find two collections named "news" and "sources"
```

### Use Api

Once install the dependencies and prepare the data, start the api server with the following command:

```
node lib/index.js
```

- There will be a log in your terminal: listening to port 4000.

Now, you can use the Api which is on your local server. The entrace address is https://localhost:4000/v1

## Contribute

- Source code: https://github.com/life2free/express-mongodb-api
- Issue Tracker: https://github.com/life2free/express-mongodb-api/issues
