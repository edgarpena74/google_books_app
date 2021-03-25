//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Port set up

const PORT = process.env.PORT || 5000;

app.use(cors());

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Optimize for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//test tesst
//api routes starts with "/api"
app.use("/api", require("./routes/apiRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
