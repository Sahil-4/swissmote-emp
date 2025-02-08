import { Router } from "express";
import {
  fetchEvent,
  fetchEvents,
  searchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  joinEvent,
  exitEvent,
  getEventAttendees,
} from "../controllers/event.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.use(verifyToken);

router.get("/", fetchEvents);

router.get("/:eventId", fetchEvent);

router.get("/search", searchEvents);

router.post("/", createEvent);

router.patch("/:eventId", updateEvent);

router.delete("/:eventId", deleteEvent);

router.get("/:eventId/join", joinEvent);

router.get("/:eventId/exit", exitEvent);

router.get("/:eventId/attendees", getEventAttendees);

export default router;
