import pool from '../models/connectdb';
import moment from 'moment';
import queries from '../models/userqueries';

class Loans {
    async applyForLoan(loan) {
        this.interest = 0.05 * parseInt(loan.amount, 10);
        this.installment = (parseInt(loan.amount, 10) + parseInt(this.interest, 10)) / parseInt(loan.tenor, 10);
        this.balance = parseInt(loan.amount, 10);
        this.status = 'pending';
        this.repaid = false;
        this.createdOn = moment(new Date());
        this.newLoan = [
            loan.email,
            loan.tenor,
            loan.amount,
            this.interest,
            this.installment,
            this.balance,
            this.status,
            this.repaid,
            this.createdOn, 
        ];
        this.res = await pool.query(queries.createLoanApplication, this.newLoan);
        return [this.res.rows[0]];
    }

    async getAllLoans() {
        this.res = await pool.query(queries.getAllLoansApplications);
        return this.res.rows;
    }
    
    async getOneLoan(id) {
        this.loan = [];
        this.res = await pool.query(queries.getSpecificLoan, [id]);
        if (this.res.rowCount === 1) {
            this.loan.push(this.res.rows[0]);
        }
        return this.loan;
    }
    async getloanStatus(status, repaid){
        this.res = await pool.query(queries.getLoansByStatus, [status, repaid]);
        return this.res.rows; 
    }
    async checkLoan(email){
        this.loan=[];
        const res= await pool.query(queries.loanExist,[email]);
        if(res.rowCount>0){
            this.loan.push(res.rows[0]);
        }
        return this.loan;
    }
    async updateLoan(id, status) {
        this.res = await pool.query(queries.approveLoanApplication, [id, status]);
        return [this.res.rows[0]];
    }
    
}
export default new Loans();