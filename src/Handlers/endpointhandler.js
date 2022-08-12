const fs = require('fs');
const path = require('path');

const homeHandler = (req, res)=>{
    const extension= endpoint.split('.')[1];
    const mimeType = {
        css: 'text/css',
        json: 'application/json',
        js: 'application/javascript',
        png: 'image/png',
        jpg: 'image/jpg',
    }
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
module.exports = homeHandler;