import UserController from "../controllers/userController";

const router = require('express-promise-router')();
const objUserControleer = new UserController();

router.post("/user", objUserControleer.createUser);

export default router;