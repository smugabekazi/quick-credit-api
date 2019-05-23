
    const createUserTableQuery = `CREATE TABLE IF NOT EXISTS 
    users (
        id SERIAL NOT NULL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        address VARCHAR(128) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        isAdmin BOOLEAN NOT NULL,
        password VARCHAR(255) NOT NULL,
        status VARCHAR(20) NOT NULL,
        createdOn TIMESTAMP
    )                 
    `;
const createLoanTableQuery = `CREATE TABLE IF NOT EXISTS 
    loans (
        loanId SERIAL NOT NULL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        tenor INTEGER NOT NULL,
        amount INTEGER NOT NULL,
        interest INTEGER NOT NULL,
        installment INTEGER NOT NULL,
        balance INTEGER NOT NULL,
        status VARCHAR(255) NOT NULL,
        repaid BOOLEAN NOT NULL,
        createdOn TIMESTAMP,
        FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
    )`;
const createLoanRepaymentTableQuery = `CREATE TABLE IF NOT EXISTS 
    repayments (
        id SERIAL NOT NULL PRIMARY KEY,
        loanid INTEGER NOT NULL,
        paidamount INTEGER NOT NULL,
        createdOn TIMESTAMP,
        FOREIGN KEY (loanId) REFERENCES loans(loanId) ON DELETE CASCADE
    )`;

export default {
  createUserTableQuery,
  createLoanRepaymentTableQuery,
  createLoanTableQuery
};

