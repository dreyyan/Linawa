const dotenv = require("dotenv");

const getNews = async (req, res) => {
  dotenv.config();
  apikey = `${process.env.GNEWS_APIKEY}`;
  url =
    "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=" +
    apikey;

  // article properties (enclosed in quotes): title, description,
  // content, url, image, publishedAt, source.name, source.url
  // for more: https://gnews.io/docs/v4?javascript#introduction

  const response = await fetch(url);
  const data = await response.json();

  articles = data.articles;

  for (i = 0; i < articles.length; i++) {
    // articles[i].title
    console.log("Title: " + articles[i]["title"]);
    // articles[i].description
    console.log("Description: " + articles[i]["description"]);
    // You can replace {property} below with any of the article properties returned by the API.
    // articles[i].{property}
    // console.log(articles[i]['{property}']);

    // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
    break;
  }
};

module.exports = { getNews };
