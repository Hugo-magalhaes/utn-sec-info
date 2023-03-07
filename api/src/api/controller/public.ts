import { Request, Response } from "express";
import healthCheck from "@application/health-check";

const HealthCheck = async (request: Request, response: Response) => {
    const dto = healthCheck();
    response.send(dto);
}

export {
    HealthCheck
}