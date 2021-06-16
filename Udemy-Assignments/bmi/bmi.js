const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  res.send("Your BMI is : " + (w / (h*h)));
});

app.listen("3000", function() {
  console.log("post : 3000 is started");
});
