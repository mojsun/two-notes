const express = require("express");
const path = require("path");
const api = require("./routes/index");

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

//app use tell express to look into public for static content
app.use(express.static("public"));

//Get route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Get route for notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//Get route for wildcard
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// app listen

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
