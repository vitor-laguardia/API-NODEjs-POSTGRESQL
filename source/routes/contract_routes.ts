import ContractController from "../controllers/contractController";

const router = require('express-promise-router')();
const objContract = new ContractController();

router.post("/contract", objContract.createContract);

export default router;