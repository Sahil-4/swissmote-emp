import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Guest from "../models/guest.model.js";
import { APIResponse } from "../utils/APIResponse.js";
import { NextFunction, Request, Response } from "express";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("authtoken")?.replace("Bearer ", "");

    if (!token) throw new Error("no auth token");

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as { _id: string };
    req.user_id = decodedToken._id;

    let user = null;
    user = user || (await User.findOne({ _id: req.user_id }));
    user = user || (await Guest.findOne({ _id: req.user_id }));
    if (!user) throw new Error("no user found");

    next();
  } catch (error) {
    res.status(401).send(new APIResponse(401, null, "unable to verify token"));
  }
};

export { verifyToken };
