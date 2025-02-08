import Event from "../models/event.model.js";
import Attandees from "../models/attendees.model.js";
import { APIResponse } from "../utils/APIResponse.js";
import { Request, Response } from "express";

const fetchEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const data = await Event.findById(eventId);
    res.status(200).send(new APIResponse(200, data, "event fetch successful"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to fetch event"));
  }
};

const fetchEvents = async (req: Request, res: Response) => {
  try {
    const data = await Event.find();
    res.status(200).send(new APIResponse(200, data, "events fetch successful"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to fetch events"));
  }
};

const searchEvents = async (req: Request, res: Response) => {
  try {
    const { category, time } = req.query;
    const data = await Event.find().or([{ category }, { time }]);
    res.status(200).send(new APIResponse(200, data, "search results"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to fetch search results"));
  }
};

const createEvent = async (req: Request, res: Response) => {
  try {
    const organiser = req.user_id;
    const { name, description, category, time, note } = req.body;
    const data = await Event.create({ name, description, category, time, note, organiser });
    res.status(200).send(new APIResponse(200, data, "event created"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to create event"));
  }
};

const updateEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const userId = req.user_id;
    const { description, category, time, note } = req.body;
    const data = await Event.updateOne({ _id: eventId, organiser: userId }, { description, category, time, note });
    res.status(200).send(new APIResponse(200, data, "event updated"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to update event"));
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const userId = req.user_id;
    const data = await Event.deleteOne({ _id: eventId, organiser: userId });
    res.status(200).send(new APIResponse(200, data, "event deleted"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to delete event"));
  }
};

const joinEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const userId = req.user_id;
    const data = await Attandees.create({ event_id: eventId, user_id: userId });
    res.status(200).send(new APIResponse(200, data, "event join successful"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to join events"));
  }
};

const exitEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const userId = req.user_id;
    const data = await Attandees.deleteOne({ event_id: eventId, user_id: userId });
    res.status(200).send(new APIResponse(200, data, "event exit successful"));
  } catch (error) {
    res.status(500).send(new APIResponse(500, null, "unable to exit event"));
  }
};

const getEventAttendees = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const data = await Attandees.find({ event_id: eventId })
      .populate({ path: "user_id", model: "User", select: "_id username" })
      .exec();
    res.status(200).send(new APIResponse(200, data, "fetch event attandees"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new APIResponse(500, null, "unable to fetch event attandees"));
  }
};

export {
  fetchEvent,
  fetchEvents,
  searchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  joinEvent,
  exitEvent,
  getEventAttendees,
};
