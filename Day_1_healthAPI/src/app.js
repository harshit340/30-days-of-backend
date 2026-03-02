import express from "express";
import dotenv from "dotenv";
import healthRouter from "./routes/health.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1",healthRouter);


export default app;