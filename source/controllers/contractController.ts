import Contract from '../models/contract';
import { Request, Response } from 'express';
import db from '../config/database';

export default class ContractController 
{
    async createContract(req:Request, res:Response)
    {
        try {
            
            if (req.body === "" || req.body.contractNumber === "" || req.body.startDate === "" || req.body.endDate === "" || req.body.value === "") {
                return res.status(400).end();
            }

            const contract = new Contract(req.body.contractNumber, req.body.startDate, req.body.endDate, req.body.value);
            const result = await db.query(
                "INSERT INTO contracts ( contract_number, start_date, end_date, value) VALUES ($1, $2, $3, $4);", 
                [contract.contractNumber, contract.startDate, contract.endDate, contract.value]
            )

            return res.json(contract);
            
        } catch (error) {
            console.log('Error creating contract');
            return res.status(400).end();
        }
    }
}