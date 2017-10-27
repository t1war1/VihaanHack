const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public_html/index.html'));
});

app.listen(process.env.PORT,()=>{
    console.log("Server started at http://localhost:2222/");
});