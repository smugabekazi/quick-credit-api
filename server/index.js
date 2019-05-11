import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import loanRoute from './routes/loanRoute';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(userRoute);
app.use(loanRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening to Port ${PORT}...`);
});