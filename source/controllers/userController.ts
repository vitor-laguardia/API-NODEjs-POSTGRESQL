import { Request, Response } from 'express';
import User from '../models/user';
import db from '../config/database';

export default class UserController 
{
    async createUser(req:Request, res:Response)
    {
        try {      

            if (req.body == "" || req.body.name == "" || req.body.cpf == "" || req.body.operatingUnitId == "") {
                return res.status(400).end();
            }  

            const user = new User(req.body.name, req.body.cpf, req.body.operatingUnitId);
            const result = await db.query(
                "INSERT INTO users ( name, cpf, op_unit_id) VALUES ($1, $2, $3);", 
                [user.name, user.cpf, user.operatingUnitId]
            )

            return res.json(user);

        } catch (error) {
            console.log(error);
            console.log('Error creating user');
            return res.status(400).end();

        }
    }
}
