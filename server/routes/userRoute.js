import express from 'express';
import userController from '../controllers/user/signup';
import SigninController from '../controllers/user/signin';
import verifyUser from '../controllers/user/verifyUser';

const router = express.Router();

router.post('/api/v1/auth/signup',userController.registerUser);
router.post('/api/v1/auth/signin',SigninController.signin);
router.patch('/api/v1/users/:id', verifyUser.verifyUser);

export default router;