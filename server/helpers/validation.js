import Joi from 'joi';
import { join } from 'path';


class Validate{
    userSignin(signinData){
        const schema={
            email: Joi.string().email().required(),
            password:Joi.string().min(5).max(10).required(),
        };
        return Joi.validate(signinData,schema);
        
    }

    userSignup(signupdata){
        const schema = {
            firstName: Joi.string().min(3).max(255).required(),
            lastName: Joi.string().min(3).max(255).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(5).max(8).required(),
        };
        return Joi.validate(signupdata,schema);
    }
    validateApplication(applyData){
        const schema = {
            email: Joi.string().email().required(),
            tenor : Joi.number().integer().max(12).required(),
            amount:Joi.number().integer().required(),
        };
        return Joi.validate(applyData,schema);
    }
}
const validate = new Validate();
export default validate;
