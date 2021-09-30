import { Router } from "express";

let router = Router();

router.get('/', (req, res) => {
    res.json({'message': 'first page'});
})

export default router;