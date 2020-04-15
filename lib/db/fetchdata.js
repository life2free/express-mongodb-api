const fs = require("fs");
const fetch = require("node-fetch");
const newsApiUrl = "https://newsapi.org/v2/everything?q=bitcoin";
const sourceUrl = "https://newsapi.org/v2/sources";
const jsonDataFilePath = "./lib/db";

function getSourcesFromApi() {
  fetch(`${sourceUrl}`, {
    headers: {
      "X-Api-Key": "94c943336a554a92a9fd546cdef192fa",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let sources = JSON.stringify(res.sources);
      fs.writeFile(`./lib/db/sources.json`, sources, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    })
    .catch((err) => {
      console.log("Got Sources from api and wrote to json file failed!", err);
    });
}

getSourcesFromApi();
// function getNewsListFromNewsApi() {
//   fetch(`${newsApiUrl}`, {
//     headers: {
//       "X-Api-Key": "94c943336a554a92a9fd546cdef192fa",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       newsList = [];
//       if (res.articles.length > 0) {
//         for (let i = 0; i < res.articles.length; i++) {
//           // just get the news which includes image
//           let urlToImage = res.articles[i].urlToImage;
//           if (urlToImage !== null && urlToImage !== "") {
//             newsList.push(res.articles[i]);
//           }
//         }
//         newsCount =
//           newsList.length > maxDisplayCount ? maxDisplayCount : newsList.length;
//         // parse the original news list
//         parseNewsListFromNewsApi(newsList);
//       }
//     })
//     .then(() => {
//       newsIndex = 0;
//       renderList = [...newsListParsed];
//       // render the page
//       renderNewsDiv(newsIndex);
//     })
//     .catch((err) => {
//       console.log("Something went wrong", err);
//     });
// }

// // parse the original news list from news api
// function parseNewsListFromNewsApi(list) {
//   newsListParsed = [];
//   for (let i = 0; i < newsCount; i++) {
//     let originNews = list[i];

//     // parse the title
//     let title = originNews.title === null ? "" : originNews.title;

//     // parse the author
//     let author = originNews.author === null ? "" : originNews.author;

//     // parse the published date
//     let publishedDate =
//       originNews.publishedAt === null ? "" : originNews.publishedAt;
//     if (publishedDate.length >= 10) {
//       // just get the date, no time
//       publishedDate = publishedDate.slice(0, 10);
//     }

//     // parse the image's url
//     let image = originNews.urlToImage === null ? "" : originNews.urlToImage;

//     // parse the content
//     let content = originNews.content === null ? "" : originNews.content;
//     if (content !== "") {
//       // replace the "\r\n" to '<br/><br/>'
//       content = content.replace(/\r\n/g, "<br/><br/>");
//       // replace the last "[  ]" to ""
//       let idxBegin = content.lastIndexOf("[");
//       if (idxBegin !== -1) {
//         let idxEnd = content.indexOf("]", idxBegin + 1);
//         if (idxEnd !== -1) {
//           let firstPart = content.substr(0, idxBegin);
//           if (idxEnd < content.length - 1) {
//             let lastPart = content.substr(idxEnd + 1);
//             content = firstPart + lastPart;
//           } else {
//             content = firstPart;
//           }
//         }
//       }
//     } else {
//       // if there is no content, then using description
//       let description =
//         originNews.description === null ? "" : originNews.description;
//       content = description;
//     }

//     // parse the source
//     let source = "";
//     if (originNews.source !== null) {
//       source = originNews.source.name === null ? "" : originNews.source.name;
//     }

//     // parse the source url
//     let url = originNews.url === null ? "" : originNews.url;
//     newsListParsed.push(
//       new News(title, author, publishedDate, image, content, source, url)
//     );
//   }
// }
