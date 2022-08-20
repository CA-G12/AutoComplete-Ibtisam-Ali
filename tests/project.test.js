const supertest = require('supertest');
const router = require('../src/router');
describe('Testing pages routers and its status codes', () => {
    test('landing Page router returns a status code of 200 and body of index.html', (done) => {
        supertest(router)
            .get('/')
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Home Page router returns a status code of 200 and body of homePage.html', (done) => {
        supertest(router)
            .get("/public/homePage.html")
            .expect('Content-Type', 'text/html')
            .end((err, res) => {
                if(err)  return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Stylesheet router returns a status code of 200 and body of style.css', (done) => {
        supertest(router)
            .get("/public/style.css")
            .expect(200)
            .expect('Content-Type', 'text/css')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('JS file router returns a status code of 200 and body of script.js', (done) => {
        supertest(router)
            .get("/public/JS/script.js")
            .expect('Content-Type', 'application/javascript')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('JS file router returns a status code of 200 and body of fetch.js', (done) => {
        supertest(router)
            .get("/public/JS/fetch.js")
            .expect('Content-Type', 'application/javascript')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Image router returns a status code of 200 and body of images.png', (done) => {
        supertest(router)
            .get("/public/assets/images.png")
            .expect('Content-Type', 'image/png')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Image router returns a status code of 200 and body of index-img.png', (done) => {
        supertest(router)
            .get("/public/assets/index-img.png")
            .expect('Content-Type', 'image/png')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Image router returns a status code of 200 and body of tab-icon.png', (done) => {
        supertest(router)
            .get("/public/assets/tab-icon.png")
            .expect('Content-Type', 'image/png')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });
});