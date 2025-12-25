import pool from "../db";
import { Event } from "../models/event.model";

export const getEvents = async (): Promise<Event[]> => {
    const result = await pool.query("SELECT * FROM events ORDER BY date, time");
    return result.rows;
};

export const createEvent = async (event: Event) => {
    await pool.query(
        "INSERT INTO events (title, date, time, reminder) VALUES ($1,$2,$3,$4)",
        [event.title, event.date, event.time, event.reminder]
    );
};