import { Router } from "express";
import { HealthCheck } from "@api/controller/public";

const router = Router();
 
router.get('/', HealthCheck);

export default router;