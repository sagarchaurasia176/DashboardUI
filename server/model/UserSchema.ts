import { Schema, model } from "mongoose";
// TODO can use validator package

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter user name"],
    minlength: [3, "Please provide appropriate name"],
    maxlength: [24, "Maximum 24 characters allowed"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email"],
  },
  picture: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

function validateEmail(email: string) {
  const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegExp.test(email);
}

const User = model("User", userSchema);
export default User;
