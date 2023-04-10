import { HealthCheckResponseDto } from "./health-check-response-dto";

const healthCheck = (): HealthCheckResponseDto => {
    const response = new HealthCheckResponseDto("SEGURIDAD EN SISTEMAS DE INFORMACION 2023");
    return response;
}

export {
    healthCheck,
    HealthCheckResponseDto
}