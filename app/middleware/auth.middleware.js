import jwt from "jsonwebtoken";
import ENV from "../env/index.js";
import { OPEN_ROUTES } from "../constants/index.js";

function isTokenVerified(token) {
  try {
    jwt.verify(token[1], ENV.JWT_KEY);
  } catch (e) {
    return false;
  }
  return true;
}

function checkOpenRoute() {
  return OPEN_ROUTES.some((route) => {
    route.method.toUpperCase() == request.method &&
      route.route.test(request.originalUrl);
  });
}

export const auth = async (request, response, next) => {
  if (checkOpenRoute()) {
    next();
    return;
  }

  if (!request.headers["authorization"]) {
    response.send({ data: [] });
    return;
  }

  const token = request.headers["authorization"].split(" ");
  if (!isTokenVerified(token[1])) {
    response.send({ data: [], message: "Not Authorized" });
    return;
  }

  next();
};
