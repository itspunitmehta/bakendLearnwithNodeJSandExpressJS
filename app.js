const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routers/admin');
const shopRoutes = require('./routers/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h3>Page Not Found:404</h3>');
})

app.listen(3000);