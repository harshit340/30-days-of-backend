import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notes.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/notes",notesRoutes);

export default app;