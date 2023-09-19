const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");
const AuthRoute = require("./routes/auth"); // Add the AuthRoute

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // Update with your React app's URL
  methods:["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
    }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://abhierugadindla:UGlZtbe8D23kJOqE@cluster0.rrydrnd.mongodb.net/?retryWrites=true&w=majority", () => {
  console.log("MongoDB Connected...");
});

app.use(UploadRoute);
app.use(AuthRoute); // Use the AuthRoute

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
