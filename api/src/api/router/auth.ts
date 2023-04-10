import { Router } from "express";
import { Login, CheckLogin } from "@api/controller/auth";
import tokenValidation from "@api/middleware/token-validation";

const router = Router();

router.get('/auth', tokenValidation, CheckLogin);
router.put('/auth/login', Login);

export default router;