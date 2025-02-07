import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "username is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  },
);

export default model("User", userSchema);
