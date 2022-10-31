import model from "../../models/user/adopter.model.js";

const getAll = async (query) => {
  return await model.find({ deleted: false });
};

const add = async (body) => {
  return await model.create(body);
};

const addAnimal = async (_id, animal) => {
  return await model.findOneAndUpdate(
    { _id, deleted: false },
    { $push: { animals: animal } },
    {
      new: true,
    }
  );
};

export default { getAll, add, addAnimal };
