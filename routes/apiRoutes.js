const router = require("express").Router();
const db = require("../models");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

//route for getting books
router.get("/books", (req, res) => {
  db.Books.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route for saving a new books
router.post("/books", (req, res) => {
  db.Books.create(req.body).then((data) => {
    res.json(data);
    console.log("saved: " + data);
  });
});

//route for deleting by id
router.delete("/books/:id", (req, res) => {
  db.Books.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
      console.log("deleted: " + data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
