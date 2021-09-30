import OperatingUnitController from "../controllers/operatinUnitController";

const router = require('express-promise-router')();
const objOperatinUnit = new OperatingUnitController();

router.post("/operatingUnit", objOperatinUnit.createOperatingUnit);

export default router;