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

  res.json(data.articles);
};

module.exports = { getNews };
