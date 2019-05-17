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

describe('SIGNIN USER TEST', () => {
  it('Should log in into account', (done) => {
    const user = {
      email: 'schellamugabekazi76@gmail.com',
      password: '12345',
    };

    chai.request(server)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.status(200);
        res.body.should.have.property('status');
        // res.body.should.have.property('data');
        // res.body.data.should.be.a('array');
        done();
      });
  });
 
});
describe('Apply for Loan ', () => {
  it('User should apply for a loan', (done) => {
    const loan = {
      "email":"schellamuabekeazi76@gmail.com",
	   "tenor":"10",
	   "amount":"50000"
    };

    chai.request(server)
      .post('/api/v1/loans')
      .send(loan)
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.status(201);
        res.body.should.have.property('status');
        // res.body.should.have.property('data');
        // res.body.data.should.be.a('array');
        done();
      });
  });
 
});
describe('get all loans', () => {
  it('Admin should view all loans', (done) => {
    
    

    chai.request(server)
      .get('/api/v1/loans')
      .send()
      .end((err, res) => {
        res.body.should.be.an('object');
        res.body.should.have.status(200);
        res.body.should.have.property('status');
        // res.body.should.have.property('data');
        // res.body.data.should.be.a('array');
        done();
      });
  });
 
});
// describe('Admin should post repayment history', () => {
//   it('Admin should update repayment history in a favor of client', (done) => {
//     const updateloan = {
//       paidAmount:"2000"
//     };

//     chai.request(server)
//       .post('api/v1/repayment/1')
//       .send(updateloan)
//       .end((err, res) => {
//         res.body.should.be.an('object');
//         res.body.should.have.status(201);
//         res.body.should.have.property('status');
//         // res.body.should.have.property('data');
//         // res.body.data.should.be.a('array');
//         done();
//       });
//   });
 
// });




