import express from 'express';
import indexRouter from './routes/index';
import contractRouter from './routes/contract_routes';
import operatingUnitRouter from './routes/operating_unit_routes';
import usersRouter from './routes/users_routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(indexRouter);
app.use(contractRouter);
app.use(operatingUnitRouter);
app.use(usersRouter);

export default app;