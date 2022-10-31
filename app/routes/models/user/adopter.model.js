import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import { MODEL } from "../../../constants/index.js";
import model from "./user.model.js";

const schema = mongoose.Schema({
  animals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: MODEL.ANIMAL,
    },
  ],
});

schema.plugin(paginate);

export default model.discriminator(MODEL.USER.ADOPTER, schema);
