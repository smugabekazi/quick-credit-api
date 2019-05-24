// import loandb from '../../models/loandb';
import validateLoan from '../../helpers/validation';
import moment from 'moment';
import Loans from '../../models/Loan';
import Users  from '../../models/user';

export class LoanController{

   static async applyLoan(req, res) {
            const {
                error
            } = validateLoan.validateApplication(req.body);
            if (error) {
                return res.status(400).send({
                    status: 400,
                    error: error.details[0].message,
                });
            }
       
        const findUser = await Users.getSpecificUser(req.body.email);
        if (findUser.length === 0) {
            return res.status(404).send({
                status: 404,
                error: 'User does not exist!',
            });
        }
        const loan = await Loans.checkLoan(req.body.email);
        if (loan.length !== 0) {
            return res.status(409).json({
                status: 409,
                error: 'You already have a pending loan',
            });
        }
        const newLoan = await Loans.applyForLoan(req.body);
        return res.status(201).json({
            status: 201,
            data: newLoan,
        });
}
}
