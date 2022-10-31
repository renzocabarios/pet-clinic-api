import service from "./disease.service.js";

const getAll = async (req, res) => {
  const data = await service.getAll();
  res.send({ data, status: "success", message: "Fetch success" });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await service.getById(id);
  res.send({ data: [data], status: "success", message: "Fetch success" });
};

const add = async (req, res) => {
  const data = await service.add(req.body);
  res.send({ data: [data], status: "success", message: "Add success" });
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = await service.update(id, req.body);
  res.send({ data: [data], status: "success", message: "Update success" });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data: [data], status: "success", message: "Delete success" });
};

export { getAll, getById, add, update, deleteById };
