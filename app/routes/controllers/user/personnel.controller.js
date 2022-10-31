import service from "../../services/user/personnel.service.js";
import bcrypt from "bcrypt";
import ENV from "../../../env/index.js";

const getAll = async (req, res) => {
  const data = await service.getAll(req.query);
  res.send({ data });
};

const add = async (req, res) => {
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.add({ password: encrypted, ...rest });
  res.send({ data });
};

const changePosition = async (req, res) => {
  const { id } = req.params;
  const { position } = req.body;
  const data = await service.update(id, { position });
  res.send({ data: [data] });
};

export { getAll, add, changePosition };
