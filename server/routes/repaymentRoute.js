import express from 'express';
import repayment from '../controllers/reapayment/repayment';


const router = express.Router();

router.post('/api/v1/repayment/:id',repayment.rapayLoan);

export default router;