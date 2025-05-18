import express from "express";
import dotenv from "dotenv";

import webhookRoutes from "./routes/webhook";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/webhook", webhookRoutes);

export default app;
