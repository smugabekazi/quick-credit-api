import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import loanRoute from './routes/loanRoute';
import repayment from './routes/repaymentRoute';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(userRoute);
app.use(loanRoute);
app.use(repayment);
app.use('*',(req,res)=>res.status(404).json({
    status:404,
    error:'Wrong URL!'
}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening to Port ${PORT}...`);
});