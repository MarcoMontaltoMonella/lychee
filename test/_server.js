var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server/server')
var should = chai.should()

chai.use(chaiHttp)

describe('Server', function() {
  it('should return 200 on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should return \"Hello World!\" on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.text.should.be.eql("Hello World!");
        done();
      });
  });
});