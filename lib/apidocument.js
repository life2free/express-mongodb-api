/**
 * @api {get} /newss  Get all news
 * @apiDescription Get all of news. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName GetAllNews
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} _id  The news unique ID, which is a 24-bit hash string.
 * @apiSuccess {Object} source  The source of the news.
 * @apiSuccess {String} source._id  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} source.id  The id of the news source.
 * @apiSuccess {String} source.name  The name of news source.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response(List of news):
 * [
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18cc",
 *      "source": {
 *           "_id": "5e97bb9c0761fd34dc5b18b2",
 *           "id": "techcrunch",
 *           "name": "TechCrunch"
 *       },
 *       "author": "Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *   }...
 * ]
 */

/**
 * @api {get} /newss/:id  Get news by id
 * @apiDescription Get the news by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName GetNewsById
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The news unique ID, which is a 24-bit hash string.
 *
 * @apiSuccess {String} _id  The news unique ID, which is a 24-bit hash string.
 * @apiSuccess {Object} source  The source of the news.
 * @apiSuccess {String} source._id  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} source.id  The id of the news source.
 * @apiSuccess {String} source.name  The name of news source.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18cc",
 *      "source": {
 *           "_id": "5e97bb9c0761fd34dc5b18b2",
 *           "id": "techcrunch",
 *           "name": "TechCrunch"
 *       },
 *       "author": "Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 *
 * @apiError NewsNotFound News not found!
 * @apiErrorExample Error-Response:
 *  News not found!
 */

/**
 * @api {get} /newss/query/q?  Query news by conditions
 * @apiDescription Get list of news which match the query string. When using this api to get list of news,
 *   the query string should after the question mark (?). If there is no query string after ?, it meaning
 *   query news without condition, then will get all of the news. If there is query string, then
 *   will get the list of news which match all of the conditions. If the query parameters key is: author,
 *   title,description or content, the api will conduct fuzzyquery and ignore case with these parameters value.
 *   i.e: thequery string is: ?author=cather&title=finan , then all of the news which its author includes "cather"
 *   and its title includes "finan" match the conditions, and ignorecase the these parameters value. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName QueryNews
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} _id(Optional). The news unique ID, which is a 24-bit hash string.
 * @apiParam {String} source(Optional). The source unique ID, refer to the Source collection, which is a 24-bit hash string.
 * @apiParam {String} author(Optional). The author of the news.
 * @apiParam {String} title(Optional). The title of the news.
 * @apiParam {String} description(Optional). The description of the news.
 * @apiParam {String} content(Optional). The content of the news.
 * @apiParam {String} date(Optional). The published date of the news, format: YYYY-MM-DD.
 * @apiParamExample {json} Request-Example:
 *  /newss/query/q?author=cather&title=Fina
 *
 * @apiSuccess {String} _id  The news unique ID, which is a 24-bit hash string.
 * @apiSuccess {Object} source  The source of the news.
 * @apiSuccess {String} source._id  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} source.id  The id of the news source.
 * @apiSuccess {String} source.name  The name of news source.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response(List of news):
 * [
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18cc",
 *      "source": {
 *           "_id": "5e97bb9c0761fd34dc5b18b2",
 *           "id": "techcrunch",
 *           "name": "TechCrunch"
 *       },
 *       "author": "Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *   }...
 * ]
 */

/**
 * @api {post} /newss  Add a news
 * @apiDescription Add a news to database. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName AddNews
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} source._id  The source unique ID, refer to the Source collection.
 * @apiParam {String} author The author of the news.
 * @apiParam {String} title  The title of the news.
 * @apiParam {String} description  The description of the news.
 * @apiParam {String} content  The content of the news.
 * @apiParam {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiParam {String} url  The related url of the news.
 * @apiParam {String} imageUrl  The image's url of the news.
 * @apiParamExample {json} Request-Example:
 * {
 *      "source": {
 *           "_id": "5e97bb9c0761fd34dc5b18b2"
 *       },
 *       "author": "Test Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 *
 *
 * @apiSuccess {String} _id  The news unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} source  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18fc",
 *      "source": "5e97bb9c0761fd34dc5b18b2",
 *       "author": "Test Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 */

/**
 * @api {put} /newss/:id  Edit news by id
 * @apiDescription Edit the news by news unique ID, the unique ID is the param in the request path,
 *  the properties of news which will be edit are in the request body. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName EditNewsById
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The news unique ID, which is a 24-bit hash string. This param is in request path.
 * @apiParamExample {String} Request-Example(The news unique ID, in the request path):
 *      5e97bb9c0761fd34dc5b18fc
 *
 * @apiParam {String} source._id  The source unique ID, refer to the Source collection.
 * @apiParam {String} author The author of the news.
 * @apiParam {String} title  The title of the news.
 * @apiParam {String} description  The description of the news.
 * @apiParam {String} content  The content of the news.
 * @apiParam {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiParam {String} url  The related url of the news.
 * @apiParam {String} imageUrl  The image's url of the news.
 * @apiParamExample {json} Request-Example(The properties of news, in the request body):
 * {
 *      "source": {
 *           "_id": "5e97bb9c0761fd34dc5b18b2",
 *       },
 *       "author": "Test Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 *
 * @apiSuccess {String} _id  The news unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} source  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18fc",
 *      "source": "5e97bb9c0761fd34dc5b18b2",
 *       "author": "Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 *
 * @apiError NewsNotFound News not found!
 * @apiErrorExample Error-Response:
 *  News not found!
 */

/**
 * @api {delete} /newss/:id  Delete news by id
 * @apiDescription Delete the news by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName DeleteNewsById
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The news unique ID, which is a 24-bit hash string.
 * @apiParamExample {String} Request-Example:
 *      5e97bb9c0761fd34dc5b18fc
 *
 *
 * @apiSuccess {String} _id  The news unique ID.
 * @apiSuccess {String} source  The source unique ID, refer to the Source collection.
 * @apiSuccess {String} author  The author of the news.
 * @apiSuccess {String} title  The title of the news.
 * @apiSuccess {String} description  The description of the news.
 * @apiSuccess {String} content  The content of the news.
 * @apiSuccess {String} date  The published date of the news, format: YYYY-MM-DD.
 * @apiSuccess {String} url  The related url of the news.
 * @apiSuccess {String} imageUrl  The image's url of the news.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18fc",
 *      "source": "5e97bb9c0761fd34dc5b18b2",
 *       "author": "Catherine Shu",
 *       "title": "Grab hires Peter Oey as its chief financial officer",
 *       "description": "Grab announced today that it has hired Peter ...",
 *       "url": "http://techcrunch.com/2020/04/01/grab-hires-peter-oey-as-its-chief-financial-officer/",
 *       "imageUrl": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1192338076.jpg?w=600",
 *       "date": "2020-04-01",
 *       "content": "Grab announced today that it has hired Peter Oey ..."
 *  }
 *
 * @apiError NewsNotFound News not found!
 * @apiErrorExample Error-Response:
 *  News not found!
 */

/**
 * @api {get} /sources  Get all source
 * @apiDescription Get all of source. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName GetAllSource
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response(List of source):
 * [
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b184b",
 *      "id": "abc-news",
 *      "name": "ABC News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://abcnews.go.com",
 *      "category": "general",
 *      "language": "en",
 *      "country": "us"
 *   }...
 * ]
 */

/**
 * @api {get} /sources/:id  Get source by id
 * @apiDescription Get the source by source unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName GetSourceById
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The source unique ID, which is a 24-bit hash string.
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b184b",
 *      "id": "abc-news",
 *      "name": "ABC News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://abcnews.go.com",
 *      "category": "general",
 *      "language": "en",
 *      "country": "us"
 *  }
 *
 * @apiError SourceNotFound Source not found!
 * @apiErrorExample Error-Response:
 *  Source not found!
 */

/**
 * @api {get} /sources/query/q?  Query source by conditions
 * @apiDescription Get list of source which match the query string. When using this api to get list of source,
 *   the query string should after the question mark (?). If there is no query string after ?, it meaning
 *   query source without condition, then will get all of the source. If there is query string, then
 *   will get the list of source which match all of the conditions. If the query parameters key is: name or
 *   description, the api will conduct fuzzyquery and ignore case with these parameters value. i.e: the
 *   query string is: ?name=blast&description=descub , then all of the source which its name includes "blast"
 *   and its description includes "descub" match the conditions, and ignorecase the these parameters value.
 *   The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName QuerySource
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiParam {String} _id(Optional). The news unique ID, which is a 24-bit hash string.
 * @apiParam {String} id(Optional).  The id of the source.
 * @apiParam {String} name(Optional).  The name of the source.
 * @apiParam {String} description(Optional).  The description of the source.
 * @apiParam {String} category(Optional).  The category of the source.
 * @apiParam {String} language(Optional).  The language of the source.
 * @apiParam {String} country(Optional).  The country of the source.
 * @apiParamExample {json} Request-Example:
 *  /sources/query/q?name=blast&description=descub
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response(List of source):
 * [
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b1859",
 *      "id": "blasting-news-br",
 *      "name": "Blasting News (BR)",
 *      "description": "Descubra a seção brasileira da Blasting News, a primeira ...",
 *      "url": "https://br.blastingnews.com",
 *      "category": "general",
 *      "language": "pt",
 *      "country": "br"
 *   }...
 * ]
 */

/**
 * @api {post} /sources  Add a source
 * @apiDescription Add a source to database. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName AddSource
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  The id of the source.
 * @apiParam {String} name  The name of the source.
 * @apiParam {String} description  The description of the source.
 * @apiParam {String} category  The category of the source.
 * @apiParam {String} language  The language of the source.
 * @apiParam {String} country  The country of the source.
 * @apiParam {String} url  The related url of the source.
 * @apiParamExample {json} Request-Example:
 * {
 *      "id": "Test.com.news",
 *      "name": "Test News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://testnews.go.com",
 *      "category": "general",
 *      "language": "en",
 *      "country": "us"
 *  }
 *
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18ff",
 *      "id": "Test.com.news",
 *      "name": "Test News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://testnews.go.com",
 *      "category": "general",
 *      "language": "en",
 *      "country": "us"
 *  }
 */

/**
 * @api {put} /sources/:id  Edit source by id
 * @apiDescription Edit the source by source unique ID, the unique ID is the param in the request path,
 *  the properties of source which will be edit are in the request body. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName EditSourceById
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The source unique ID, which is a 24-bit hash string. This param is in request path.
 * @apiParamExample {String} Request-Example(The source unique ID, in the request path):
 *      5e97bb9c0761fd34dc5b18ff
 *
 * @apiParam {String} id  The id of the source.
 * @apiParam {String} name  The name of the source.
 * @apiParam {String} description  The description of the source.
 * @apiParam {String} category  The category of the source.
 * @apiParam {String} language  The language of the source.
 * @apiParam {String} country  The country of the source.
 * @apiParam {String} url  The related url of the source.
 * @apiParamExample {json} Request-Example(The properties of source, in the request body):
 * {
 *      "id": "Good.com.news",
 *      "name": "Good News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://testnews.go.com",
 *      "category": "general",
 *      "language": "ch",
 *      "country": "test"
 * }
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18ff",
 *      "id": "Good.com.news",
 *      "name": "Good News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://testnews.go.com",
 *      "category": "general",
 *      "language": "ch",
 *      "country": "test"
 *  }
 *
 * @apiError SourceNotFound Source not found!
 * @apiErrorExample Error-Response:
 *  Source not found!
 */

/**
 * @api {delete} /sources/:id  Delete source by id
 * @apiDescription Delete the source by news unique ID. The base url of api on heroku: https://express-news-api.herokuapp.com/v1
 * @apiName DeleteSourceById
 * @apiGroup Source
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The source unique ID, which is a 24-bit hash string.
 * @apiParamExample {String} Request-Example:
 *      5e97bb9c0761fd34dc5b18ff
 *
 *
 * @apiSuccess {String} _id  The source unique ID, which is a 24-bit hash string.
 * @apiSuccess {String} id  The id of the source.
 * @apiSuccess {String} name  The name of the source.
 * @apiSuccess {String} description  The description of the source.
 * @apiSuccess {String} category  The category of the source.
 * @apiSuccess {String} language  The language of the source.
 * @apiSuccess {String} country  The country of the source.
 * @apiSuccess {String} url  The related url of the source.
 *
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id": "5e97bb9c0761fd34dc5b18ff",
 *      "id": "Good.com.news",
 *      "name": "Good News",
 *      "description": "Your trusted source for breaking news, analysis, exclusive ...",
 *      "url": "https://testnews.go.com",
 *      "category": "general",
 *      "language": "ch",
 *      "country": "test"
 *  }
 *
 * @apiError SourceNotFound Source not found!
 * @apiErrorExample Error-Response:
 *  Source not found!
 */
