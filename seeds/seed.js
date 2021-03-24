const mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const bookSeed = {
  title: "The Chemical Philosophy of Robert Boyle",
  authors: "Marina Paola Banchetti-Robino",
  description:
    "Robert Boyle (1627-1691) believed that a reductionist conception of the mechanical philosophy threatened the heuristic power and autonomy of chemistry as an experimental science. While some historical and philosophical scholars have examined his nuanced position, understanding the chemicalphilosophy he developed through his own experimental work is incredibly difficult even for experts in the field. In The Chemical Philosophy of Robert Boyle, Marina Paola Banchetti-Robino energetically explains Boyle's ideas in a whole new light and proposes that Boyle regarded chemical qualities asnon-reducible dispositional and relational properties that emerge from, and supervene upon, the mechanistic structure of chymical atoms. Banchetti-Robino demonstrates that these ideas are implicit in Boyle's writing, making his philosophical contributions crucial to the fields of both philosophy andchemistry.The arguments presented are further strengthened by a detailed mereological analysis of Boylean chymical atoms as chemically elementary entities, which establishes the theory of wholes and parts that is most consistent with an emergentist conception of chemical properties. More generally, this bookexamines the way in which Boyle sought to accommodate his complex chemical philosophy within the framework of the 17th century mechanistic theory of matter. Banchetti-Robino conceptualizes Boyle's experimental work as a scientific research programme, in the Lakatosian sense, to better explain thepositive and negative heuristic function of the mechanistic theory of matter within his chemical philosophy.The Chemical Philosophy of Robert Boyle actively engages with the contemporary and lively debates over the nature of Boyle's ideas about structural chemistry, fundamental mechanistic particles and properties, the explanatory power of subordinate causes, the complex relation between fundamentalparticles, natural kinds, and unified chemical wholes. The book is a rich historical account that begins with the dominant paradigms of 16th and 17th Century chemical philosophy and takes readers all the way through to the 21st Century.",
  image:
    "http://books.google.com/books/content?id=TSvsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  link: "https://www.googleapis.com/books/v1/volumes/TSvsDwAAQBAJ",
};

db.Books.create({})
  .then(() => db.Books.collection.insertOne(bookSeed))
  .then((data) => {
    console.log(data, "it was a success");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
