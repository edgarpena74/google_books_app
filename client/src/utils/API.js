const axios = require("axios");

const apiKey = process.env.API_KEY;
// const searchWord = "dogs";

async function getBooks(bookSearch) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}:keyes&${apiKey}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function postBooks(book) {
  try {
    const response = await axios.post("http://localhost:5000/api/books", book);
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getBooks, postBooks };
