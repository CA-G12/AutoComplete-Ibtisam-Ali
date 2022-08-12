const http = require('http');
const router = require('./router');

const port = process.env.PORT || 8080;

http.createServer(router).listen(port, ()=>{
    console.log(`This website is serverd on port ${port}`);
})