# JSON Api

Build a JSON Api using Express and Mongoose.

## Description

The Api provides CRUD (including create, read, update, delete ) functionality with RESTful routes. The data which api manipulate is retrieved form the public api ( [News Api](https://newsapi.org/) ) and seed to local mongodb.

### Technical Utilizes

1. NodeJs
2. Express
3. MongoDB & Mongoose
4. Public Api - [News Api](https://newsapi.org/)

### Use Instructions

These instructions will give you guidance how to get a copy of the api and run on your local machine.

#### Installing

1. Go ahead and create/change into a new directory, then clone down this project to your local machine and go into the project folder.
2. Install the dependencies with the following command:

npm i express mongoose node-fetch body-parser

#### Prepare data

1. Navigate into your cloned directory and get the online data (comes from newsapi.org) with following command:

node lib/db/fetchdata.js

- You should be able to find the data in lib/db/newss.json and lib/db/sources.json

2. Seed the data ( which in lib/db/newss.json and lib/db/sources.json ) to your local MongoDB with following command:  
   node lib/db/seed.js

- After you seed, you will be able to find the data in your local MongoDB. You can follow the following steps to check the data.

* - Run the following commands to start MongoDB and check data in a seperate terminal:  
    mongo //start up the MongoDB  
    show dbs //you will find the database named newss
    use newss
    show collections // you will find two collections named "news" and "sources"
