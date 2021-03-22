//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Port set up
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
