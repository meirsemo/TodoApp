const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false};// solving the deprecation warning

app.listen(PORT, ()=> {
    console.log("The server is listening on port " + PORT);
});

app.use(express.json());// middleware parse to a json format
app.use(cors());// to allow request from a different origin

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err));

app.use("/todos", todoRoutes);// base path

