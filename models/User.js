import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Provide a valid email",
    },
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Provide an email"],
    minlength: 6,
    select: false,
  },

  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Last name",
  },

  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "City",
  },

  lastLessonDate: {
    type: Date,
  },

  nextLesson: {
    date: Date,
    subject: String,
    homework: String,
  },

  lastLessons: [
    {
      date: Date,
      subject: String,
    },
  ],

  isPaid: {
    type: Boolean,
  },

  isAdmin: {
    type: Boolean,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
