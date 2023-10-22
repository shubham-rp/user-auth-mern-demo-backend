const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnection = require("./src/config/db");
const userRoutes = require("./src/routes/user.routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

dbConnection
  .dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Everything ran succesfully. Listening on port:",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Demo Project.");
});

app.use("/api/user", userRoutes);
