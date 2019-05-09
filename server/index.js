import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening to Port ${PORT}...`);
});