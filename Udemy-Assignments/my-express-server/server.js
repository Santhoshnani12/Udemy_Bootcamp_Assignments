const express = require("express");
const app = express();

app.get("/",function(request, response) {
	response.send("<h1>Hello World!");
});

app.get("/contact", function(req, res) {
	res.send("contact me at nanisanthosh789@gmail.com");
});

app.get("/about",function(req,res) {
	res.send("This is santhosh\nI am from Tirupati \n I am pursuing bacholers in LPU");
});

app.get("/hobbie", function(req, res) {
	res.send("<ul><li>Eating</li><li>Eating</li><li>Eating</li></ul>");
});

app.listen(3000,function(){
	console.log("server just started at 3000 port");
});