import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const jwtToken = {
  generateToken(id) {
    const token = jwt.sign(
      {
        userId: id
      },
      process.env.SECRET,
      { expiresIn: "7d" }
    );
    return token;
  }
};

export default jwtToken;
