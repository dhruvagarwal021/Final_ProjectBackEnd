const mongoose = require("mongoose");
const express = require("express");
const UserRoute = require("./controller/UserRoute");
const cors = require("cors");
const PetsRoute = require("./controller/PetsRoute");
const VaccineRoute = require("./controller/VaccineRoute");

const app = express();
const PORT = 4000;

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://dhruvagarwal743:12345@cluster0.obd3xiz.mongodb.net/PetCare", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/UserRoute", UserRoute);
app.use("/PetsRoute", PetsRoute);
app.use("/VaccineRoute", VaccineRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
