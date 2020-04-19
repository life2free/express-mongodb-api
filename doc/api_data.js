define({ "api": [
  {
    "type": "post",
    "url": "/newss",
    "title": "Add a news",
    "description": "<p>Add a news to database. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "AddNews",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"source\": {\n          \"_id\": \"5e9bc6c9d3382dc254a2bc43\"\n      },\n      \"author\": \"Test Catherine Shu\",\n      \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n      \"description\": \"Grab announced today that it has hired Peter ...\",\n      \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n      \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n      \"date\": \"2020-04-01\",\n      \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18fc\",\n    \"source\": {\n        \"_id\": \"5e9bc6c9d3382dc254a2bc43\",\n        \"name\": \"TechCrunch\"\n    },\n     \"author\": \"Test Catherine Shu\",\n     \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n     \"description\": \"Grab announced today that it has hired Peter ...\",\n     \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n     \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n     \"date\": \"2020-04-01\",\n     \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "/newss/:id",
    "title": "Delete news by id",
    "description": "<p>Delete the news by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "DeleteNewsById",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "5e97bb9c0761fd34dc5b18fc",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18fc\",\n    \"source\": {\n        \"_id\": \"5e9bc6c9d3382dc254a2bc43\",\n        \"name\": \"TechCrunch\"\n    },\n     \"author\": \"Catherine Shu\",\n     \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n     \"description\": \"Grab announced today that it has hired Peter ...\",\n     \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n     \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n     \"date\": \"2020-04-01\",\n     \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NewsNotFound",
            "description": "<p>News not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "News not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "put",
    "url": "/newss/:id",
    "title": "Edit news by id",
    "description": "<p>Edit the news by news unique ID, the unique ID is the param in the request path, the properties of news which will be edit are in the request body. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "EditNewsById",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The news unique ID, which is a 24-bit hash string. This param is in request path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example(The news unique ID, in the request path):",
          "content": "5e97bb9c0761fd34dc5b18fc",
          "type": "String"
        },
        {
          "title": "Request-Example(The properties of news, in the request body):",
          "content": "{\n     \"source\": {\n          \"_id\": \"5e9bc6c9d3382dc254a2bc43\",\n      },\n      \"author\": \"Test Catherine Shu\",\n      \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n      \"description\": \"Grab announced today that it has hired Peter ...\",\n      \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n      \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n      \"date\": \"2020-04-01\",\n      \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18fc\",\n    \"source\": {\n        \"_id\": \"5e9bc6c9d3382dc254a2bc43\",\n        \"name\": \"TechCrunch\"\n    },\n     \"author\": \"Catherine Shu\",\n     \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n     \"description\": \"Grab announced today that it has hired Peter ...\",\n     \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n     \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n     \"date\": \"2020-04-01\",\n     \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NewsNotFound",
            "description": "<p>News not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "News not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/newss",
    "title": "Get all news",
    "description": "<p>Get all of news. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "GetAllNews",
    "group": "News",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(List of news):",
          "content": "[\n {\n     \"_id\": \"5e97bb9c0761fd34dc5b18cc\",\n     \"source\": {\n          \"_id\": \"5e97bb9c0761fd34dc5b18b2\",\n          \"name\": \"TechCrunch\"\n      },\n      \"author\": \"Catherine Shu\",\n      \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n      \"description\": \"Grab announced today that it has hired Peter ...\",\n      \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n      \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n      \"date\": \"2020-04-01\",\n      \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n  }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/newss/:id",
    "title": "Get news by id",
    "description": "<p>Get the news by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "GetNewsById",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18cc\",\n    \"source\": {\n         \"_id\": \"5e97bb9c0761fd34dc5b18b2\",\n         \"name\": \"TechCrunch\"\n     },\n     \"author\": \"Catherine Shu\",\n     \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n     \"description\": \"Grab announced today that it has hired Peter ...\",\n     \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n     \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n     \"date\": \"2020-04-01\",\n     \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NewsNotFound",
            "description": "<p>News not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "News not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/newss/search/keywords",
    "title": "Search news by conditions",
    "description": "<p>Get list of news which match the query string. When using this api to get list of news, the query string should after the question mark (?). If there is no query string after ?, it meaning query news without condition, then will get all of the news. If there is query string, then will get the list of news which match all of the conditions. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "QueryNews",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>(Optional). Keywords or phrases to search for in the title, author, description, content or the source name. the api will conduct fuzzyquery and ignore case with keywords or phrases. i.e: the keywords is: ?q=cather , then all of the news which one of the properties (title, author, description, content or the source name) includes &quot;cather&quot; match the conditions, and ignorecase the keywords or phrases.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>(Optional). The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>(Optional). The source unique ID, refer to the Source collection, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>(Optional). The published date of the news, format: YYYY-MM-DD.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/newss/search/keywords?q=cather&date=2020-04-01",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The author of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The published date of the news, format: YYYY-MM-DD.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The image's url of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(List of news):",
          "content": "[\n {\n     \"_id\": \"5e97bb9c0761fd34dc5b18cc\",\n     \"source\": {\n          \"_id\": \"5e97bb9c0761fd34dc5b18b2\",\n          \"name\": \"TechCrunch\"\n      },\n      \"author\": \"Catherine Shu\",\n      \"title\": \"Grab hires Peter Oey as its chief financial officer\",\n      \"description\": \"Grab announced today that it has hired Peter ...\",\n      \"url\": \"http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/\",\n      \"imageUrl\": \"https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600\",\n      \"date\": \"2020-04-01\",\n      \"content\": \"Grab announced today that it has hired Peter Oey ...\"\n  }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "/sources",
    "title": "Add a source",
    "description": "<p>Add a source to database. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "AddSource",
    "group": "Source",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"id\": \"Test.com.news\",\n     \"name\": \"Test News\",\n     \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n     \"url\": \"https://testnews.go.com\",\n     \"category\": \"general\",\n     \"language\": \"en\",\n     \"country\": \"us\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18ff\",\n    \"id\": \"Test.com.news\",\n    \"name\": \"Test News\",\n    \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n    \"url\": \"https://testnews.go.com\",\n    \"category\": \"general\",\n    \"language\": \"en\",\n    \"country\": \"us\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  },
  {
    "type": "delete",
    "url": "/sources/:id",
    "title": "Delete source by id",
    "description": "<p>Delete the source by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "DeleteSourceById",
    "group": "Source",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "5e97bb9c0761fd34dc5b18ff",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source._id",
            "description": "<p>The source unique ID, refer to the Source collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source.name",
            "description": "<p>The name of news source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18ff\",\n    \"id\": \"Good.com.news\",\n    \"name\": \"Good News\",\n    \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n    \"url\": \"https://testnews.go.com\",\n    \"category\": \"general\",\n    \"language\": \"ch\",\n    \"country\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>Source not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Source not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  },
  {
    "type": "put",
    "url": "/sources/:id",
    "title": "Edit source by id",
    "description": "<p>Edit the source by source unique ID, the unique ID is the param in the request path, the properties of source which will be edit are in the request body. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "EditSourceById",
    "group": "Source",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The source unique ID, which is a 24-bit hash string. This param is in request path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example(The source unique ID, in the request path):",
          "content": "5e97bb9c0761fd34dc5b18ff",
          "type": "String"
        },
        {
          "title": "Request-Example(The properties of source, in the request body):",
          "content": "{\n     \"id\": \"Good.com.news\",\n     \"name\": \"Good News\",\n     \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n     \"url\": \"https://testnews.go.com\",\n     \"category\": \"general\",\n     \"language\": \"ch\",\n     \"country\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b18ff\",\n    \"id\": \"Good.com.news\",\n    \"name\": \"Good News\",\n    \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n    \"url\": \"https://testnews.go.com\",\n    \"category\": \"general\",\n    \"language\": \"ch\",\n    \"country\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>Source not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Source not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  },
  {
    "type": "get",
    "url": "/sources",
    "title": "Get all source",
    "description": "<p>Get all of source. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "GetAllSource",
    "group": "Source",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(List of source):",
          "content": "[\n {\n     \"_id\": \"5e97bb9c0761fd34dc5b184b\",\n     \"id\": \"abc-news\",\n     \"name\": \"ABC News\",\n     \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n     \"url\": \"https://abcnews.go.com\",\n     \"category\": \"general\",\n     \"language\": \"en\",\n     \"country\": \"us\"\n  }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  },
  {
    "type": "get",
    "url": "/sources/:id",
    "title": "Get source by id",
    "description": "<p>Get the source by source unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "GetSourceById",
    "group": "Source",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e97bb9c0761fd34dc5b184b\",\n    \"id\": \"abc-news\",\n    \"name\": \"ABC News\",\n    \"description\": \"Your trusted source for breaking news, analysis, exclusive ...\",\n    \"url\": \"https://abcnews.go.com\",\n    \"category\": \"general\",\n    \"language\": \"en\",\n    \"country\": \"us\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>Source not found!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Source not found!",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  },
  {
    "type": "get",
    "url": "/sources/search/keywords",
    "title": "Search source by conditions",
    "description": "<p>Get list of source which match the query string. When using this api to get list of source, the query string should after the question mark (?). If there is no query string after ?, it meaning query source without condition, then will get all of the source. If there is query string, then will get the list of source which match all of the conditions. The base url of api on heroku: https://express-news-api.herokuapp.com/v1</p>",
    "name": "QuerySource",
    "group": "Source",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>(Optional). Keywords or phrases to search for in the name or description of source. the api will conduct fuzzyquery and ignore case with keywords or phrases. i.e: the keywords is: ?q=blast , then all of the source which one of the name or description includes &quot;blast&quot; match the conditions, and ignorecase the keywords or phrases.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>(Optional). The news unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>(Optional).  The category of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>(Optional).  The language of the source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>(Optional).  The country of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/sources/search/keywords?q=blast&country=br",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The source unique ID, which is a 24-bit hash string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>The language of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>The country of the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The related url of the source.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(List of source):",
          "content": "[\n {\n     \"_id\": \"5e97bb9c0761fd34dc5b1859\",\n     \"id\": \"blasting-news-br\",\n     \"name\": \"Blasting News (BR)\",\n     \"description\": \"Descubra a seção brasileira da Blasting News, a primeira ...\",\n     \"url\": \"https://br.blastingnews.com\",\n     \"category\": \"general\",\n     \"language\": \"pt\",\n     \"country\": \"br\"\n  }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "lib/apidocument.js",
    "groupTitle": "Source"
  }
] });
