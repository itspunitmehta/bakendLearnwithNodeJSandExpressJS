const fs = require('fs');


const rqHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
      res.write('</html>');
      return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.text', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<header><title>My Server Page</title></header>');
    res.write('<body><h1> Welcome to my server</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = rqHandler;

// module.exports = {
//     handler: rqHandler,
//     someText: "Text"
// };

module.exports.handler = rqHandler;
module.exports.someText = "it is just the beginning";

