import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "User  name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: 2,
      maxLength: 255,
      match: [/\S+@\S+\.\S+/, "Please fill valid email"],
    },
    password: {
      type: String,
      require: [true, "Password is requires"],
      minLength: 2,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
