const fs = require("fs");
const fetch = require("node-fetch");
const newsApiUrl = "https://newsapi.org/v2/everything?q=financial";
const sourceUrl = "https://newsapi.org/v2/sources";
const jsonDataFilePath = "./lib/db";

// fetch the source data from api
function getSourcesFromApi() {
  fetch(`${sourceUrl}`, {
    headers: {
      "X-Api-Key": "94c943336a554a92a9fd546cdef192fa",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let sourceData = JSON.stringify(res.sources);
      // write the source data to json file
      fs.writeFile(`${jsonDataFilePath}/sources.json`, sourceData, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("write source data to json file success");
        }
      });
    })
    .catch((err) => {
      console.log(
        "Got source data from api and wrote to json file failed!",
        err
      );
    });
}

getSourcesFromApi();

function getNewssFromApi() {
  fetch(`${newsApiUrl}`, {
    headers: {
      "X-Api-Key": "94c943336a554a92a9fd546cdef192fa",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let newsJsonData = res.articles;
      if (newsJsonData.length > 0) {
        let parsedNewsJsonData = filterAndParseNewsData(newsJsonData);

        console.log(parsedNewsJsonData);
        let newsDataStr = JSON.stringify(parsedNewsJsonData);
        // write the source data to json file
        fs.writeFile(`${jsonDataFilePath}/newss.json`, newsDataStr, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("write news data to json file success");
          }
        });
      }
    })
    .catch((err) => {
      console.log("Got news data from api and wrote to json file failed!", err);
    });
}

// parse the original news list from news api
function filterAndParseNewsData(newsJsonData) {
  let returnData = [];

  newsJsonData.map((originNews) => {
    if (
      originNews.source.id !== null &&
      originNews.source.id !== "" &&
      originNews.urlToImage !== null &&
      originNews.urlToImage !== ""
    ) {
      let news = {};
      news.source = originNews.source;
      news.author = originNews.author;
      news.title = originNews.title;
      news.description = originNews.description;
      news.url = originNews.url;
      news.imageUrl = originNews.urlToImage;
      // parse the published date
      let publishedDate =
        originNews.publishedAt === null ? "" : originNews.publishedAt;
      if (publishedDate.length >= 10) {
        // just get the date, no time
        publishedDate = publishedDate.slice(0, 10);
      }
      news.date = publishedDate;

      // parse the content
      let content = originNews.content === null ? "" : originNews.content;
      if (content !== "") {
        // replace the "\r\n" to '<br/><br/>'
        content = content.replace(/\r\n/g, "<br/><br/>");
        // replace the last "[  ]" to ""
        let idxBegin = content.lastIndexOf("[");
        if (idxBegin !== -1) {
          let idxEnd = content.indexOf("]", idxBegin + 1);
          if (idxEnd !== -1) {
            let firstPart = content.substr(0, idxBegin);
            if (idxEnd < content.length - 1) {
              let lastPart = content.substr(idxEnd + 1);
              content = firstPart + lastPart;
            } else {
              content = firstPart;
            }
          }
        }
      }
      news.content = content;
      returnData.push(news);
    }
  });
  return returnData;
}

getNewssFromApi();
