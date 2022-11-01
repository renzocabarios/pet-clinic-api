import model from "./user.model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const getById = async (_id) => {
  return await model.findOne({ _id, deleted: false });
};

const add = async (body) => {
  return await model.create(body);
};

const update = async (_id, body) => {
  return await model.findOneAndUpdate({ _id, deleted: false }, body, {
    new: true,
  });
};

const deleteById = async (_id) => {
  return await model.findOneAndUpdate(
    { _id },
    { deleted: true },
    { new: true }
  );
};

const getByEmail = async (email) => {
  return await model.findOne({ email, deleted: false });
};

export default { getAll, getById, add, update, deleteById, getByEmail };
