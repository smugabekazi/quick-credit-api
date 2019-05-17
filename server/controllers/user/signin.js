import userdb from "../../models/userdb";
import validateUser from "../../helpers/validation";
import jwtToken from "../../helpers/jwtToken";

class SigninController {
  static signin(req, res) {
    const { error } = validateUser.userSignin(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const userEmail = userdb.find(user => user.email === req.body.email);
    if (!userEmail) {
      return res.status(404).json("Invalid Username or password ");
    }
    const validPassword = userdb.find(
      user => user.password === req.body.password
    );
    if (!validPassword) {
      return res.status(404).json("Invalid Username or password ");
    }
    const token = jwtToken.generateToken(userEmail.id);
    return res.status(200).json({
      status: 200,
      message: "Welcome! Login successful",
      token
    });
  }
}

export default SigninController;
