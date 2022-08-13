const http = require('http');
const router = require('./router');

const port = process.env.PORT || 7000;

http.createServer(router).listen(port, ()=>{
    console.log(`This website is serverd on port ${port}`);
})