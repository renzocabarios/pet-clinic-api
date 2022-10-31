import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import { MODEL } from "../../constants/index.js";

const options = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
};

const schema = mongoose.Schema(
  {
    name: {
      trim: true,
      type: String,
      required: [true, "Animal Type Name is required."],
    },
    description: {
      trim: true,
      type: String,
      required: [true, "Animal Type Description is required."],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  options
);

schema.plugin(paginate);

export default mongoose.model(MODEL.ANIMAL_TYPE, schema);
