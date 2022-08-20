const {landingHandler, endpointHandler, searchHandler} = require('./handlers');

const router = (req, res) => {
    const endpoint = req.url;
    const method = req.method;

    if (endpoint === '/' && method === 'GET') {
        landingHandler(res);
    }
    else if (endpoint.includes('public') && method === 'GET') {
        endpointHandler(req, res);
    }
    else if (endpoint.includes('/search') && method === 'GET') {
        searchHandler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(`<h1>Page not Found</h1>`);
    };
}
module.exports = router;
