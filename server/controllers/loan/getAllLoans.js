import loandb from '../../models/loandb';

class LoanController{
    getAllLoans(req,res){
        if(loandb.length>=1){
            return res.status(200).json({
                status: 200,
                message: 'Loans retrieved successfully',
                data:loandb,
            });
        }else{
            return res.status(404).json('No loan found in the database');
        }
    }
}
const loanController = new LoanController();
export default loanController;