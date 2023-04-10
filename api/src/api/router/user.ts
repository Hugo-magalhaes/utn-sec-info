import { Router } from "express";
import { Create } from "@api/controller/user";

const router = Router();
 
router.post('/user', Create);

export default router;