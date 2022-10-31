import service from "../services/adoption.service.js";
import adopter from "../services/user/adopter.service.js";

const getAll = async (req, res) => {
  const data = await service.getAll(req.query);
  res.send({ data });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await service.getById(id);
  res.send({ data: [data] });
};

const add = async (req, res) => {
  const data = await service.add(req.body);
  res.send({ data });
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = await service.update(id, { status });
  await adopter.addAnimal(data.adopter, data.animal);
  res.send({ data });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data });
};

export { getAll, getById, add, updateStatus, deleteById };
