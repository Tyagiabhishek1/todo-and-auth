const express = require("express");
const app = express();
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Include DB connection file
const connectDB = require("./db/connect");

//Include file(s) that consists end points/Routes
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");

//Define Routes
app.use("/api/tutor-bin/todo", todoRoute);
app.use("/api/tutor-bin/user", userRoute);
app.use("*", (req, res) => {
  res.status(404).json("Resource not found");
});
app.use(express.json());

//Define PORT at which the Application will run
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB_URL);
    app.listen(port, () => {
      console.log(`Server Started at port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
