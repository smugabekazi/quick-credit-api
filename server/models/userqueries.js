
// USER QUERIES
const checkIfUserExist = 'SELECT * FROM users WHERE email = $1';
const createUserAccount = `INSERT INTO users (firstname, lastname, address, email, isAdmin, password, status, createdOn)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING *`;

const userLogin='SELECT * FROM users WHERE email = $1 AND password = $2';

const getUser = 'SELECT * FROM users where email=$1';
const verifyUser = `UPDATE users SET status = $2 WHERE email = $1 RETURNING * `;
// const verifyUser = 'UPDATE users SET status = $2 WHERE email = $1 RETURNING *';
//LOANS QUERIES 
const createLoanApplication = `INSERT INTO loans (user, tenor, amount, installment, interest, balance, status,repaid, createdOn)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,)
RETURNING loanId, user, tenor , amount, installment, interest, balance, status, repaid, createdOn`;
export default {
    createUserAccount,
    checkIfUserExist,
    userLogin,
    getUser,
    verifyUser,
    createLoanApplication,
    
};