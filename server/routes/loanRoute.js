import express from 'express';
import approve from '../controllers/loan/approve';
import getSpecificLoan from '../controllers/loan/getSpecificLoan';
import getAllLoans from '../controllers/loan/getAllLoans';
import {LoanController} from '../controllers/loan/apply';


const router = express.Router();

router.post('/api/v1/loans', (req,res)=>LoanController.applyLoan(req,res));
router.patch('/api/v1/loans/:id',approve.approve);
router.get('/api/v1/loans/:id', (req,res)=> getSpecificLoan.getSpecificLoan(req,res));
router.get('/api/v1/loans', getAllLoans.getAllLoans);
// router.get('/api/v1/loans/current', currentLoans.currentLoans);

export default router;