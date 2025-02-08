import { model, Schema, Types } from "mongoose";

const eventSchema = new Schema(
  {
    organiser: {
      type: Types.ObjectId,
      require: [true, "organiser is required"],
      ref: "User",
    },
    name: {
      type: String,
      require: [true, "name is required"],
    },
    description: {
      type: String,
      require: [true, "description is required"],
    },
    category: {
      type: String,
      require: [true, "category is required"],
    },
    time: {
      type: Date,
      require: [true, "time is required"],
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default model("Event", eventSchema);
