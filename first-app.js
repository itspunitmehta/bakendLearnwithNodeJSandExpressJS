const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<header><title>My Server Page</title></header>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url==='/about'){
        res.write('<html>');
        res.write('<header><title>My Server Page</title></header>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url==='/node'){
        res.write('<html>');
        res.write('<header><title>My Server Page</title></header>');
        res.write('<body><h1> Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<header><title>My Server Page</title></header>');
    res.write('<body><h1> Welcome to my server</h1></body>');
    res.write('</html>');
    res.end();
    
});

server.listen(4000);
//type hostname:4000 in your browser and keep changing url after "hostname:4000/" everytime for different result
//example hostname:4000/test
//example hostname:4000/about
//example hostname:4000/node