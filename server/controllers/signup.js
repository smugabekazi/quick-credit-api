import userdb from '../modules/userdb';
import Joi from 'joi';

class UserController {
    registerUser(req, res) {
        const schema = {
            firstname: Joi.string().min(3).max(255).required(),
            lastName: Joi.string().min(3).max(255).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(5).max(8).required(),
        };
        const result = Joi.validate(req.body,schema);
        if(result.error){
            return res.status(400).json(result.error.details[0].message);
        }

        const { firstname, lastName, email, password } = req.body;
        const userData = {
            id: userdb.length + 1,
            firstname,
            lastName,
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