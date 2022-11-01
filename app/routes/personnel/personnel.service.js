import model from "./personnel.model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
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
