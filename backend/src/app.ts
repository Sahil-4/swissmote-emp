import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import eventsRoutes from "./routes/events.routes.js";
import { APIResponse } from "./utils/APIResponse.js";

dotenv.config();

const app = express();

const corsOptions = {
  credentials: true,
  origin: process.env.ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.status(200).send(new APIResponse(200, null, "server is running"));
});

app.use("/api/v1/users", usersRoutes);

app.use("/api/v1/events", eventsRoutes);

export default app;
