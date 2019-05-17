import server from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);
describe('SIGNUP USER TEST', () => {
  it('Should create a new user', (done) => {
    const user = {
      firstName: 'schella',
      lastName: 'Mugabekazi',
      email: 'schellamugabekazi76@gmail.com',
      password: '12345',
    };

    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.status(201);
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        // res.body.data.should.be.a('array');
        done();
      });
  });
 
});
