import { model, Schema, Types } from "mongoose";

const attendeesSchema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      require: [true, "user_id is required"],
      ref: "User",
    },
    event_id: {
      type: Types.ObjectId,
      require: [true, "event_id is required"],
      ref: "Event",
    },
  },
  {
    timestamps: true,
  },
);

export default model("Attendees", attendeesSchema);
