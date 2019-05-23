
import userdb from "../../models/userdb";
import validateUser from "../../helpers/validation";
import jwtToken from "../../helpers/jwtToken";
import query from"../../models/userqueries";
import pool from '../../models/connectdb';

class UserController {
 async registerUser(req, res) {
    const { error } = validateUser.userSignup(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const check = 'SELECT * FROM users WHERE email = $1';
    const userExist = await pool.query(check,[req.body.email]);
    if(userExist.rowCount>0){
      return res.status(409).json({
        status:409,
        error: 'This email has already been taken',
      });
    }

    const { firstName, lastName, email, password } = req.body;
    const status = 'unverified';
    const address = 'kigali';
    const isAdmin = 'false';
    const createdOn= '2019-03-01';
    const userData = [
      firstName, lastName, address, email, isAdmin, password, status, createdOn
    ];
 
    const { rows } = await pool.query(query.createUserAccount, userData);
    // const newUser = createUser.rows[0];
    return res.status(201).json({
      status: 201,
      data: rows,
    });

    // const userExist = userdb.find(user => user.email === req.body.email);
    // if (userExist) {
    //   return res.status(409).json("user already exists");
    // }
    // const { firstName, lastName, email, password } = req.body;
    // const userData = {
    //   id: userdb.length + 1,
    //   firstName,
    //   lastName,
    //   status: "unverified",
    //   email,
    //   password
    // };
  

    const token = jwtToken.generateToken(userData.email);

    userdb.push(userData);
    return res.status(201).json({
      status: 201,
      message: "succesfully saved",
      data: userData,
      token
    });
  }
}

const userController = new UserController();
export default userController;