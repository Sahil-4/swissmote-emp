import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    methods: {
      generateAccessToken(): string {
        return jwt.sign({ _id: this._id, username: this.username }, process.env.JWT_SECRET!, {
          expiresIn: "30m",
        });
      },
      async comparePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password!);
      },
    },
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password!, 12);
  next();
});

export default model("User", userSchema);
