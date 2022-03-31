const http = require('http');

const router = require('./router');
 
console.log(router.someText);
const server = http.createServer(router.handler);


server.listen(3000);