
import pool from '../models/connectdb';
import queries from '../models/userqueries';
import moment from 'moment';

class Users {
    async emailExist(email) {
        this.user = [];
        this.res = await pool.query(queries.checkIfUserExist, [email]);
        if (this.res.rowCount > 0) {
            this.user.push(this.res.rows[0]);
        }
        return this.user;
    }
    async getOneUser(id) {
        this.user = [];
        this.res = await pool.query(queries.getUserById, [id]);
        if (this.res.rowCount > 0) {
            this.user.push(this.res.rows[0]);
        }
        return this.user;
    }
    async getAllUsers() {
        this.res = await pool.query(queries.getAllUsersQuery);
        return this.res.rows;
    }
    async getSpecificUser(email) {
        this.user = [];
        this.res = await pool.query(queries.checkIfUserExist, [email]);
        if (this.res.rowCount > 0) {
          this.user.push(this.res.rows[0]);
        }
        return this.user;
      }
         
    async createUser(user) {
        this.salt = await bcrypt.genSalt(8);
        this.isAdmin = false;
        this.status = 'unverified';
        this.createdOn = moment(new Date());
        this.newUser = [
            user.firstname.trim(),
            user.lastname.trim(),
            user.address.trim(),
            user.email.trim(),
            this.isAdmin,
            this.password.trim(),
            this.status.trim(),
            this.createdOn,
        ];
        this.res = await pool.query(queries.createUserAccount, this.newUser);
        return [this.res.rows[0]];
    }
    async updateUser(email, status){
        this.res = await pool.query(queries.verifyUser,[email,status]); 
         return [this.res.rows[0]]; 
    }
   
}
export default new Users();