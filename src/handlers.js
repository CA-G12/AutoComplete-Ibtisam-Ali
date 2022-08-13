const fs = require('fs');
const path = require('path');
const mimeType = require('mime-types');


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
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.write('Internal Server Error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': mimeType.lookup(endpoint) });
            res.write(file);
            res.end();
        }
    })
}

//? ================ Main Handler (SEARCH) ================
const searchHandler = (req, res, endpoint) => {
    const searchValue = endpoint.slice(endpoint.lastIndexOf('/') + 1);
    const filePath = path.join(__dirname, "./cryptos.json");
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
        } else {
            if (!searchValue) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify([]))
            }
            else {
                const suggestedCoins = JSON.parse(file).filter(crypto => {
                    return crypto.name.toLowerCase().includes(searchValue.toLowerCase())
                })
                let slicedSuggestedCoins = [];
                if (suggestedCoins && suggestedCoins.length > 5)
                    slicedSuggestedCoins = suggestedCoins.slice(0, 5)
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(slicedSuggestedCoins));
            }
        }
    });
}

module.exports = {
    landingHandler,
    homeHandler,
    endpointHandler,
    searchHandler
}