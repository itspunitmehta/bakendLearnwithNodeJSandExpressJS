const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("this is inside the first middleware");
    next();//this allows the request to continue to the next middleware in line
})

app.use((req,res,next)=>{
    console.log("this is inside the second middleware");
    res.send('<h1>Hello from Express.js(PUNIT) </h1>');
})
app.listen(3000);