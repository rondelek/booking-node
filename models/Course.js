import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name missing"],
      trim: true,
    },

    level: {
      type: String,
      required: [true, "level missing"],
      trim: true,
    },

    type: {
      type: String,
      required: [true, "type missing"],
      trim: true,
    },

    groupLimit: {
      type: Number,
      required: [true, "groupLimit missing"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "price missing"],
      trim: true,
    },

    startsAt: {
      type: Date,
      required: [true, "startsAt missing"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
