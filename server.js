const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const db =
  "mongodb+srv://tduong:6pHOU9dHDmePpVO0@cluster0.madns.mongodb.net/test?retryWrites=true&w=majority";

const players = require("./routes/api/players");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database hooked");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/players", players);

const port = 5000;
app.listen(port, function (err) {
  console.log("route working on port" + port);
});
