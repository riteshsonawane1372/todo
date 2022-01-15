const express = require('express');
const bodyParser = require('body-parser')



const app = express();

var items =[]   // array for storing items 
var work =[]    // " to addd work details"

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))


app.get("/", (req, res) => {

    var today = new Date();
    var option ={
        weekday:"long",
        day : "numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-Us",option)
  
     res.render("list",{listtitle:day ,newlistitems:items});


 })

 app.post("/",(req,res)=>{
    var item =req.body.newitem

    items.push(item)
    
    res.redirect("/")
 })


 app.get("/work",(req,res)=>{

    res.render("list",{
        listtitle:"Work list",newlistitems:work
    });
 })

 app.post("/work",(req,res)=>{

    let item = req.body.newitem;

    work.push(items)
    res.redirect("/work")
 })













 app.listen(3000, function(){
     console.log(" server is running at port 3000")
 })