const express = require("express");

// import modular routers for notes.js
const noteRouter = require("./notes");

const app = express();
app.use("./notes", noteRouter);

module.exports = app;
