import { Request, Response } from 'express';
import OperatingUnit from '../models/operatingUnit';
import db from '../config/database';

export default class OperatingUnitController 
{
    async createOperatingUnit(req:Request, res:Response)
    {
        try {      
            if (req.body == "" || req.body.cnpj == "" || req.body.socialReason == "" || req.body.cep == "" || req.body.contractId == "") {
                return res.status(400).end();
            }
  
            const operatingUnit = new OperatingUnit( req.body.cnpj, req.body.socialReason, req.body.cep, req.body.contractId);
            const result = await db.query(
                "INSERT INTO operating_units ( cnpj, social_reason, cep, contract_id) VALUES ($1, $2, $3, $4) RETURNING operating_unit_id;", 
                [operatingUnit.cnpj, operatingUnit.socialReason, operatingUnit.cep, operatingUnit.contractId]
            )

            operatingUnit.id = result.rows[0].operating_unit_id;

            return res.json(operatingUnit);

        } catch (error) {
            console.log(error);
            console.log('Error creating operating unit');
            return res.status(400).end();
        }
    }
}
