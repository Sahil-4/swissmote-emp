import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

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
    methods: {
      generateAccessToken(): string {
        return jwt.sign({ _id: this._id, username: this.username }, process.env.JWT_SECRET!, {
          expiresIn: "30m",
        });
      },
    },
  },
);

export default model("Guest", guestSchema);
