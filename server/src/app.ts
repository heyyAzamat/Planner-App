import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/events", eventsRoutes);

export default app;