const fs = require('fs');
const path = require('path');

//? ================ landingHandler ================

const landingHandler = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.write('Internal Server Error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(file);
            res.end();
        }
    })
}


//? ================ homeHandler ================

const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'homePage.html');
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.write('Internal Server Error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(file);
            res.end();
        }
    })
}

//? ================ endpointHandler ================

const endpointHandler = (req, res) => {
    const endpoint = req.url;
    const filePath = path.join(__dirname, '..', 'public', endpoint);
    const extension = path.extname(filePath);
    const mimeType = {
        '.css': 'text/css',
        '.json': 'application/json',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
    }
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.write('Internal Server Error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': mimeType[extension] });
            res.write(file);
            res.end();
        }
    })
}

//? ================ searchHandler ================

const searchHandler = (req, res, endpoint) => {
    // const trueEndpoint = endpoint.slice(0, endpoint.lastIndexOf('/'));
    const searchValue = endpoint.slice(endpoint.lastIndexOf('/') + 1);
    const filePath = path.join(__dirname, "./cryptos.json");
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
        } else {
            const suggestedCoins = JSON.parse(file).filter(crypto => {
                return crypto.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            console.log('suggestedCoins on back:', suggestedCoins);
            res.writeHead(200, { "Content-Type": "application/json" });

            res.end(JSON.stringify(suggestedCoins));
        }
    });
}

//? ================ selectHandler ================

module.exports = {
    landingHandler,
    homeHandler,
    endpointHandler,
    searchHandler,
    // selectHandler
}