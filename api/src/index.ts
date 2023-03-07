import "dotenv/config";
import "reflect-metadata";
import "./aliases";
import api from "@api/server";

api.listen(process.env.PORT);

console.log(`Listening on port ${process.env.PORT}`);
