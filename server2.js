const { error } = require("console");
const express = require("express");
const { title } = require("process");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises;
const port = 4000;
app.use(express.json());
app.get("/", (req, res) => {
  fs.readFile("./data.json")
    .then((data) => {
      if (!data) {
        res.send("data not found!");
      }
      return res.send(JSON.parse(data));
    })
    .catch((error) => console.error(error));
});
app.post("/books", (req, res) => {
  let books = [];
  let book = { id: uuidv4(), title: "48 laws of power" };
  fs.readFile("./data.json")
    .then((data) => {
      books = JSON.parse(data);
      books.push(book);
      return fs
        .writeFile("./data.json", JSON.stringify(books))
        .then((data) => res.status(200).json(book))
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
});
app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const newBook = req.body;
  fs.readFile("./data.json").then((data) => {
    let books = JSON.parse(data);
    let upDatedBbooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...newBook };
      }
      return book;
    });
    if (!books.find((book) => book.id === id)) {
      return res.send("book not found");
    }
    return fs
      .writeFile("./data.json", JSON.stringify(upDatedBbooks, null, 2))
      .then((data) =>
        res.status(200).json(updatedBooks.find((book) => book.id === id))
      )
      .catch((error) => console.error(error));
  });
});
app.listen(port, () => console.log(`app listenning at port ${port}`));
