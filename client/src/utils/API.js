const axios = require("axios");

const apiKey = process.env.API_KEY;
const searchWord = "dogs";
const url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}:keyes&${apiKey}`;

async function testRoutes() {
  try {
    const response = await axios.get(url);
    return console.log(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { testRoutes };
//test test test
