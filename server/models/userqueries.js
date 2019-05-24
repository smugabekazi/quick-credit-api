
// USER QUERIES
const checkIfUserExist = 'SELECT * FROM users WHERE email=$1';
const createUserAccount = `INSERT INTO users (firstname, lastname, address, email, isAdmin, password, status, createdOn)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING *`;

const userLogin='SELECT * FROM users WHERE email=$1 AND password=$2';
const getAllUsersQuery = `SELECT * FROM users`;
const getUserById = 'SELECT * FROM users WHERE id=$1';

const getUser = 'SELECT * FROM users where email=$1';
const verifyUser = 'UPDATE users SET status=$2 WHERE email=$1 RETURNING *';

//LOANS QUERIES 
const createLoanApplication = `INSERT INTO loans (email, tenor, amount, installment, interest, balance, status,repaid, createdOn)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING loanId, user, tenor , amount, installment, interest, balance, status, repaid, createdOn`;
const getAllLoansApplications='SELECT * FROM loans';
const approveLoanApplication = `UPDATE loans SET status=$2 WHERE loanId=$1 RETURNING *`;
const getSpecificLoan = `SELECT * FROM loans WHERE loanId=$1`;
const loanExist = `SELECT * FROM loans WHERE email = $1 AND repaid = false`;
const getLoansByStatus = `SELECT * FROM loans WHERE status = $1 AND repaid=$2`;

  export default{

    createLoanApplication,
    getLoansByStatus,
    loanExist,
    getAllLoansApplications,
    getSpecificLoan,
    approveLoanApplication,
    createUserAccount,
    checkIfUserExist,
    userLogin,
    getUser,
    verifyUser,
    getUserById,
    getAllUsersQuery,
    
};