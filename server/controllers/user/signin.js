
import validateUser from "../../helpers/validation";
import jwtToken from "../../helpers/jwtToken";
import queries from "../../models/userqueries";
import pool from "../../models/connectdb";

class SigninController {
  static async signin(req, res) {
    const {email, password} = req.body;
    const { error } = validateUser.userSignin(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const userExist= await pool.query(queries.userLogin, [email, password]);
    console.log(userExist.rows);
    if(userExist.rowCount<0){
      return res.status(404).json({
        status:404,
        error:'user does not exist'
      })
    }
    
//     
//     const userData = [email,password];
//     const { rows } = await pool.query(query.userLogin, userData);
//     console.log(rows);
//     return res.status(201).json({
//       status: 201,
//       data: rows,
//     });
    
    // const userEmail = userdb.find(user => user.email === req.body.email);

    // if (!userEmail) {
    //   return res.status(404).json("Invalid email ");
    // }
    // const validPassword = userdb.find(
    //   user => user.password === req.body.password
    // );
   
    // if (!validPassword) {
    
    //   return res.status(404).json("Invalid  password ");
    // }
    const token = jwtToken.generateToken(email);
    return res.status(200).json({
      status: 200,
      message: "Welcome! Login successful",
      token,
      data:userExist.rows
    });
  
    }
  }

export default SigninController;