var request = require('supertest');

describe('Running integration tests on the locally deployed app', function() {
    it('responds to /marco with Polo!', function testSlash(done) {
        request('http://localhost:46141')
          .get('/marco')
          .expect('Polo!')
          .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request('http://localhost:46141')
          .get('/foo/bar')
          .expect(404, done);
    });
    it('404 /', function testPath(done) {
        request('http://localhost:46141')
          .get('/')
          .expect(404, done);
    });
});