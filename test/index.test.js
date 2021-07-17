var _import = require('../src/index');
var supertest = require('supertest');

describe('server running', () => {
    var server;

    beforeEach(function () {
        server = _import.server;
    });
    
    afterEach(function () {
        server.close();
    });

    it('responds to /', function testSlash(done) {
        supertest(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to /data', function testSlash(done) {
        supertest(server)
            .get('/data')
            .expect(200, done);
    });
})