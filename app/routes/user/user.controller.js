import service from "./user.service.js";
import bcrypt from "bcrypt";
import ENV from "../../env/index.js";
import jwt from "jsonwebtoken";

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
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.add({ password: encrypted, ...rest });
  res.send({ data: [data], status: "success", message: "Add success" });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;
  const data = await service.update(id, rest);
  res.send({ data: [data], status: "success", message: "Update success" });
};

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.update(id, { password: encrypted });
  res.send({ data: [data], status: "success", message: "Update success" });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data: [data], status: "success", message: "Delete success" });
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const data = await service.getByEmail(email);

  if (!data) {
    res.send({ status: "fail", data: [], message: "User does not exist" });
    return;
  }

  if (!(await bcrypt.compare(password, data.password))) {
    res.send({ status: "fail", data: [], message: "Wrong Password" });
    return;
  }

  res.send({
    status: "success",
    data: [data],
    message: "Successfully authenticated",
    token: jwt.sign({ _id: data._id }, ENV.JWT_KEY, {
      expiresIn: "1h",
    }),
  });
};

export { getAll, getById, add, update, deleteById, changePassword, authUser };
