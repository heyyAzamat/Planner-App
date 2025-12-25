import { Router } from "express";
import { getEventsController, createEventController } from "../controllers/events.controller";

const router = Router();

router.get("/", getEventsController);
router.post("/", createEventController);

export default router;