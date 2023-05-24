import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [25, "Username must be at least 25 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [25, "Email must be at least 25 characters long"],
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1623778856/placeholder-image-person_ksxq3c.png",
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
