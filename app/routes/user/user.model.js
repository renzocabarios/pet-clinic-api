import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import { MODEL } from "../../constants/index.js";

const options = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
  discriminatorKey: "type",
};

const schema = mongoose.Schema(
  {
    firstName: {
      trim: true,
      type: String,
      required: [true, "User First Name is required."],
    },
    lastName: {
      trim: true,
      type: String,
      required: [true, "User Last Name is required."],
    },
    email: {
      trim: true,
      type: String,
      required: [true, "User Email is required."],
    },
    password: {
      trim: true,
      type: String,
      required: [true, "User Password is required."],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  options
);

schema.plugin(paginate);

export default mongoose.model(MODEL.USER.DEFAULT, schema);
