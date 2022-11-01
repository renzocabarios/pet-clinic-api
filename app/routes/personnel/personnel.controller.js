import service from "./personnel.service.js";
import bcrypt from "bcrypt";
import ENV from "../../env/index.js";

const getAll = async (req, res) => {
  const data = await service.getAll();
  res.send({ data, status: "success", message: "Fetch success" });
};

const add = async (req, res) => {
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.add({ password: encrypted, ...rest });
  res.send({ data: [data], status: "success", message: "Fetch success" });
};

const changePosition = async (req, res) => {
  const { id } = req.params;
  const { position } = req.body;
  const data = await service.update(id, { position });
  res.send({ data: [data], status: "success", message: "Update success" });
};

export { getAll, add, changePosition };
