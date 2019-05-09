import express from 'express';
import userController from '../controllers/signup';

const router = express.Router();

router.post('/api/v1/users',userController.registerUser);

export default router;