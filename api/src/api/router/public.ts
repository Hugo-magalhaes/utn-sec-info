import { Router } from "express";
import { HealthCheck, Login } from "@api/controller/public";

const router = Router();
 
router.get('/', HealthCheck);
router.put('/login', Login);

export default router;