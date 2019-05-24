import Loans from '../../models/Loan';

class LoanController{
   async getSpecificLoan(req,res){
        if(isNaN(req.params.id)){
            return res.status(400).json({
                status:400,
                error:"loan must be an integer",
            });
        }
        const loanResult = await Loans.getOneLoan(req.params.id);
        if(loanResult.length===0){
            return res.status().json({
                status: 404,
                data: 'loan not found',
            });
        }
        return res.status(200).json({
            status: 200,
            data: loanResult
        });
    }
}
const loanController = new LoanController();
export default loanController;