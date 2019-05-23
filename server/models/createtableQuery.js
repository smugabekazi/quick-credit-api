import pool from './connectdb.js';
import CreateTable from './createtable.js';
import dotenv from 'dotenv';
dotenv.config()

const createTables = async () => {
    await pool.query(CreateTable.createUserTableQuery);
    await pool.query(CreateTable.createLoanTableQuery);
    await pool.query(CreateTable.createLoanRepaymentTableQuery);
    console.log('tables created successfully');
};

(async () => {
await pool.query(createTables);
})().catch(error =>console.log(error));

export default createTables;