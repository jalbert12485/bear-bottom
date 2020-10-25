const express = require("express");
const path=require("path");
const fs=require("fs");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Routes
// ===========================================================

app.get("/:route", function(req, res) {
    let route=req.params.route;
    res.sendFile(path.join(__dirname, `/public/${route}.html`));
});



app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
