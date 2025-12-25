import { Request, Response } from "express";
import { getEvents, createEvent } from "../services/events.services";

export const getEventsController = async (_req: Request, res: Response) => {
    const events = await getEvents();
    res.json(events);
};

export const createEventController = async (req: Request, res: Response) => {
    const { title, date, time, reminder } = req.body;
    await createEvent({ title, date, time, reminder });
    res.status(201).send({ message: "Event created" });
};