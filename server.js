const express = require("express");
const path=require("path");
const fs=require("fs");
const Wipe=require("./node/Wipe");
const Diaper=require("./node/Diaper");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "products_db"
});


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

app.post("/admin/productadd/diaper", function(req, res) {

  let sent=req.body;
  
  let diaper1=new Diaper(sent.name, sent.short, sent.long, sent.imgSrc, sent.imgAlt, sent.inventory, sent.style, sent.size, sent.print);
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct(diaper1);
    res.end();
  });
  
  
  
  
  });
  
  
  
  function createProduct(product){
    connection.query(
      "INSERT INTO products SET ?",
      product,
      function(err, res) {
        if (err) throw err;
      
        connection.end();
      });
  
  }

app.post("/admin/productadd/wipe", function(req, res) {

let sent=req.body;

let wipe1=new Wipe(sent.name, sent.short, sent.long, sent.imgSrc, sent.imgAlt, sent.inventory, sent.dimensions);

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct(wipe1);
  res.end();
});




});



function createProduct(product){
  connection.query(
    "INSERT INTO products SET ?",
    product,
    function(err, res) {
      if (err) throw err;
    
      connection.end();
    });

}
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
