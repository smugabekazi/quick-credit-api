import loandb from '../../models/loandb';

class LoanController{
    currentLoans(req,res){
        const currentLoans = loandb.filter(loans => loans.status === req.query.status && loans.repaid.toString() === req.query.repaid);
        if(req.query.status ==='approved' && req.query.repaid=== 'true'){
            return res.status(200).json({
                status: 200,
                data: currentLoans,
                message: 'Current loans',
            });
        }
    }
}
const loanController = new LoanController();
export default loanController;