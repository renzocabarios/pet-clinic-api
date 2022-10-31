import service from "../../services/user/adopter.service.js";
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

export { getAll, add };
