import express from 'express';
import applyloan from '../controllers/loan/apply';
import approve from '../controllers/loan/approve';
import getSpecificLoan from '../controllers/loan/getSpecificLoan';
import getAllLoans from '../controllers/loan/getAllLoans';
import currentLoans from '../controllers/loan/currentLoans';

const router = express.Router();

router.post('/api/v1/loans', applyloan.loanApply);
router.patch('/api/v1/loans/:id',approve.approve);
router.get('/api/v1/loans/:id', getSpecificLoan.getSpecificLoan);
router.get('/api/v1/loans', getAllLoans.getAllLoans);
router.get('/api/v1/loans/current', currentLoans.currentLoans);

export default router;