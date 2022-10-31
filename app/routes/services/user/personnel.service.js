import model from "../../models/user/personnel.model.js";

const getAll = async (query) => {
  const populate = query.populate ?? {};
  return await model.find({ deleted: false }).populate(populate);
};

const add = async (body) => {
  return await model.create(body);
};

const update = async (_id, body) => {
  return await model.findOneAndUpdate({ _id, deleted: false }, body, {
    new: true,
  });
};

export default { getAll, add, update };
