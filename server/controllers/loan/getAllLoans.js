import Loans from '../../models/Loan';

class LoanController {
    async getAllLoans(req, res) {
        try {
            const loanList = await Loans.getAllLoans();
            const {
                status,
                repaid
            } = req.query;
            const findLoans = await Loans.getloanStatus(status, repaid);
            if (findLoans.length !== 0) {
                return res.status(200).json({
                    status: 200,
                    data: findLoans,
                });
            } else if (!status && !repaid) {
                return res.status(200).json({
                    status: 200,
                    data: loanList,
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    error: 'no loan found',
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: 'INTERNAL SERVER ERROR',
            });
        }
    }
}
const loanController = new LoanController();
export default loanController;