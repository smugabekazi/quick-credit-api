import loandb from '../../models/loandb';
import validateLoan from '../../helpers/validation';
import moment from 'moment';

class LoanContoller{
    loanApply(req,res){
        const {error} = validateLoan.validateApplication(req.body);
        if(error) return res.status(400).json(error.details[0].message);
        const {email,tenor,amount}=req.body;
        const id = loandb.length+1;
        const status = 'pending';
        const repaid = 'false';
        const interest = 0.05 * parseInt(amount, 10).toFixed(2);
        const paymentInstallment = (parseInt(amount,10) + parseInt(interest,10)).toFixed(2)/parseInt(tenor,10).toFixed(2); 
        const balance = parseInt(amount, 10).toFixed(2);
        
        const newLoan={
            id,
            status,
            repaid,
            email,
            tenor,
            paymentInstallment,
            amount,
            balance,
            createdOn:moment(new Date()).format("YYYY/MM/DD HH:MM:SS"),
        };
        const userExist = loandb.find(user =>user.email===req.body.email);
        if(userExist){
            return res.status(409).json({
                status:409,
                error:'your already applied for loan',
            });
        }
        loandb.push(newLoan);
        return res.status(201).json({
            status:201,
            message:'Succesfully submited your application',
            data:newLoan,
        });
    }
}
const loanController = new LoanContoller();
export default loanController;