const express = require ("express")
const app = express()
app.set("view engine","hbs")

app.get("/",(req,res)=>{res.render('index' , {changename:req.query.name})})

app.listen(3000)