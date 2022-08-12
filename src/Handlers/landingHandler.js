const fs = require('fs');
const path = require('path');

const landingHandler = (req, res)=>{
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
module.exports = landingHandler;