const handlers = require('./handlers');


const router = (req, res) => {
    const endpoint = req.url;
    const method = req.method;

    if (endpoint === '/' && method === 'GET') {
        handlers.landingHandler(req, res);
    }
    else if (endpoint.includes('style') || endpoint.includes('index') || endpoint.includes('images') || endpoint.includes('index-img')
        || endpoint.includes('tab-icon') && method === 'GET' || endpoint.includes('fetch') || endpoint.includes('script')) {
        handlers.endpointHandler(req, res);
    }
    else if (endpoint.includes('/homePage') && method === 'GET') {
        handlers.homeHandler(req, res);
    }
    else if (endpoint.includes('/search') && method === 'GET') {
        handlers.searchHandler(req, res, endpoint);
    }
    // else if(endpoint.includes('/selectResult') && method === 'POST'){
    //     handlers.selectHandler(req, res);
    // }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(`<h1>Page not Found</h1>`);
    };
}
module.exports = router;