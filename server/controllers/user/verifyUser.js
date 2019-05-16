import userdb from '../../models/userdb';

class VerifyUserController {
    verifyUser(req, res) {
        const id = parseInt(req.params.id, 10);
        const findUser = userdb.find(user => user.id === id);
        if (findUser) {
            findUser.status = req.body.status;
            const newData = {
                id: findUser.id,
                status: findUser.status,
            };
            return res.status(200).send({
                status: 200,
                data: [findUser],
            });
        }
        return res.status(404).send({
            status: 404,
            error: 'No user with that id exist',
        });
    }
}
const verifyUserController = new VerifyUserController();
export default verifyUserController;
