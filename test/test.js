'use strict';

// jshist expr: true

var request = require('supertest');
describe('loading express', function() {
  var server;
  beforeEach(function() {
    server = require('./../app');
  });
  this.afterEach(function() {
    server.close();
  });
  it('responds to /marco with Polo!', function testSlash(done) {
    request(server)
      .get('/marco')
      .expect('Polo!')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
  it('404 /', function testPath(done) {
    request(server)
      .get('/')
      .expect(404, done);
  });
});