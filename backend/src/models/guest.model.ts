import { model, Schema } from "mongoose";

const guestSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "username is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("Guest", guestSchema);
