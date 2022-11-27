const express = require("express");
const workoutRouter = require("../backend/routes/workouts");
const userRouter = require("../backend/routes/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

// connect to db

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listen on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRouter);
app.use("/api/user", userRouter);
