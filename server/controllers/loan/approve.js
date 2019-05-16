import loandb from '../../models/loandb';

class ApproveController {
    approve(req, res) {
        const id = parseInt(req.params.id, 10);
        const data = loandb.find(loan => loan.id === id);
        if (data) {
            data.status = req.body.status;
            const newData = {
                id: data.id,
                status: data.status,
            };
            return res.status(200).send({
                status: 200,
                data: [data],
            });
        }
        return res.status(404).send({
            status: 404,
            error: 'No loan with that id exist',
        });
    }
}
const approveController = new ApproveController();
export default approveController;
