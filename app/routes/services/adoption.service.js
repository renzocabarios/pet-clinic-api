import model from "../models/adoption.model.js";

const getAll = async (query) => {
  return await model.find({ deleted: false }).populate(query.populate ?? "");
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

export default { getAll, getById, add, update, deleteById };
