import userdb from '../../models/userdb';
import validateUser from '../../helpers/validation';

class UserController {
    registerUser(req, res) {
        const { error } = validateUser.userSignup(req.body);
        if (error) return res.status(400).json(error.details[0].message);
        const userExist = userdb.find(user => user.email === req.body.email);
        if (userExist) {
            return res.status(409).json('user already exists');
        }
        const { firstName, lastName, email, password } = req.body;
        const userData = {
            id: userdb.length + 1,
            firstName,
            lastName,
            status:"unverified",
            email,
            password,
        }
        userdb.push(userData);
        return res.status(201).json({
            status: 201,
            message: "succesfully saved",
            data: userData,
        });
    }

}
const userController = new UserController();
export default userController;