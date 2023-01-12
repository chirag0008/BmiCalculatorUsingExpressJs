const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/",(req,res)=>{
    var num1=Number(req.body.h);
    var num2=Number(req.body.w);
    var bmi=num2/(num1*num1);
    res.send(`The bmi is ${bmi}`);
})
app.listen("4000",()=>{
    console.log("Server is running on port 4000");
})