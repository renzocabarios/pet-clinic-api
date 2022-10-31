import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import { MODEL } from "../../constants/index.js";
import model from "./user.model.js";

const schema = mongoose.Schema({
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MODEL.POSITION,
    required: [true, "Personnel Position is required."],
  },
});

schema.plugin(paginate);

export default model.discriminator(MODEL.USER.PERSONNEL, schema);
