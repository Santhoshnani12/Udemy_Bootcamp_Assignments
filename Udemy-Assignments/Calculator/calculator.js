const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs')


app.get("/", function(req, res) {
	res.render('index');
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	res.send("The total of two number is " + (num1+num2));
});

app.listen("3000",function() {
	console.log("port : 3000 started");
});
