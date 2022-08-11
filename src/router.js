const fs = require('fs');
const path = require('path');

const router = (req, res)=>{
    const endpoint = req.url;
    const method = req.method;
    const mimeType = {
        css: 'text/css',
        json: 'application/json',
        js: 'application/javascript',
        png: 'image/png',
        jpg: 'image/jpg',
    }
    if(endpoint === '/' && method === 'GET'){
        const filePath = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(filePath, (err, file)=>{
            if(err){
                res.writeHead(500);
                res.write('Internal Server Error');
                res.end();
            } else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(file);
                res.end();
            }
        })
    } 
    else if(endpoint.includes('/homePage') && method === 'GET'){
        const filePath = path.join(__dirname, '..', 'public', 'homePage.html');
        fs.readFile(filePath, (err, file)=>{
            if(err){
                res.writeHead(500);
                res.write('Internal Server Error');
                res.end();
            } else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(file);
                res.end();
            }
        })
    } 
    else if (endpoint.includes('style') || endpoint.includes('index') || endpoint.includes('images') || endpoint.includes('index-img') || endpoint.includes('tab-icon') && method === 'GET'){
        const extension= endpoint.split('.')[1];
        const filePath = path.join(__dirname, '..', 'public', endpoint);
        fs.readFile(filePath, (err, file)=>{
            if(err){
                res.writeHead(500);
                res.write('Internal Server Error');
                res.end();
            } else{
                res.writeHead(200, {'Content-Type': mimeType[extension]});
                res.write(file);
                res.end();
            }
        })
    } 
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(`<h1>Page not Found</h1>`);
    };
}
module.exports = router;