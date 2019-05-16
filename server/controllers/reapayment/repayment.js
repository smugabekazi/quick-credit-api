import repayment from '../../models/repaymentdb';
import loandb from '../../models/loandb';
import repayments from '../../models/repaymentdb';
import moment from 'moment';

class RepaymentController {
    rapayLoan(req, res) {
        const loanId = parseInt(req.params.id, 10);
        const paidAmount = Number(req.body.paidAmount);
        const loan = loandb.find(item => item.id === loanId);
        if (!loan) {
            return res.status(404).json({ status: 404, error: 'no loan found' });
        }
        const newBalance = Number(loan.balance - paidAmount).toFixed(2);
        loan.balance = newBalance;
        if (newBalance === 0) {
            loan.repaid = true;
        }
        const repayment = {
            id: repayments.length + 1,
            loanId,
            email: loan.email,
            paidOn: moment(new Date()),
            paidAmount,
            installment: loan.installment,
            balance: loan.balance,
        };
        repayments.push(repayment);
        return res.status(201).json({
            status: 201,
            data: repayment,
            message: 'repayment successful'
        });
    }
}

const repaymentController = new RepaymentController();
export default repaymentController;