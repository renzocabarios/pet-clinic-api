import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import animalTypeRoute from "./app/routes/animal-type/animal-type.route.js";
import animalRoute from "./app/routes/animal/animal.route.js";
import diseaseRoute from "./app/routes/disease/disease.route.js";
import userRoute from "./app/routes/user.route.js";
import positionRoute from "./app/routes/position.route.js";
import personnelRoute from "./app/routes/personnel.route.js";
import adopterRoute from "./app/routes/adopter.route.js";
import { auth } from "./app/middleware/auth.middleware.js";
import adoptionRoute from "./app/routes/adoption.route.js";

const app = express();

// middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(auth);

//routes
app.use("/api/animal-type", animalTypeRoute);
app.use("/api/animal", animalRoute);
app.use("/api/user", userRoute);
app.use("/api/disease", diseaseRoute);
app.use("/api/position", positionRoute);
app.use("/api/personnel", personnelRoute);
app.use("/api/adopter", adopterRoute);
app.use("/api/adoption", adoptionRoute);

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
