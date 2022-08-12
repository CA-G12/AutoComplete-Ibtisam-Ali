const allHandlers = require('./Handlers/allHandlers');

const router = (req, res) => {
    const endpoint = req.url;
    const method = req.method;
    
    if(endpoint === '/' && method === 'GET'){
        allHandlers.landingHandler(req, res);
    } 
    else if(endpoint.includes('/homePage') && method === 'GET'){
        allHandlers.homeHandler(req, res);
    } 
    else if (endpoint.includes('style') || endpoint.includes('index') || endpoint.includes('images') || endpoint.includes('index-img') || endpoint.includes('tab-icon') && method === 'GET'){
        allHandlers.endpointHandler(req, res);
    }
    else if(endpoint.includes('/search') && method === 'POST'){
        allHandlers.searchHandler(req, res);
    }
    else if(endpoint.includes('/selectResult') && method === 'POST'){
        allHandlers.selectHandler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(`<h1>Page not Found</h1>`);
    };
}
module.exports = router;