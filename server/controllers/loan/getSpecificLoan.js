import loandb from '../../models/loandb';

class LoanController{
    getSpecificLoan(req,res){
        const id = parseInt(req.params.id, 10);
        loandb.map(loan=>{
            if(loan.id===id){
                return res.status(200).send({
                    status:200,
                    message:'loan retrieved successfully',
                    data:loan,
                });
            }
        });
        return res.status(404).json({
            status:404,
            error:"loan not found",
        });
    }
}
const loanController = new LoanController();
export default loanController;