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
}
const Loans= new Loans();
export default Loans;