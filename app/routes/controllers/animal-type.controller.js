import service from "../services/animal-type.service.js";

const getAll = async (req, res) => {
  const data = await service.getAll();
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

const update = async (req, res) => {
  const { id } = req.params;
  const data = await service.update(id, req.body);
  res.send({ data });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data });
};

export { getAll, getById, add, update, deleteById };
