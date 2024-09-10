const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/subsribers");
app.listen(3000, () => console.log("server started "));
