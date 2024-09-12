const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nyiringangokevin4:nyiringangokevin4@node.vbkfa.mongodb.net/?retryWrites=true&w=majority&appName=Node"
);
app.listen(3000, () => console.log("server started "));
