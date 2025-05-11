const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3177;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://jeevandaan.onrender.com"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: ["http://localhost:3000", "https://jeevandaan.onrender.com"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-csrf-token",
      "Access-Control-Allow-Origin",
    ],
    credentials: true,
    maxAge: 5000,
    exposedHeaders: ["*", "Authorization", "https://jeevandaan.onrender.com"],
  })
);
mongoose.connect(
  "mongodb+srv://esha272103:cg7nY6um50PEzrtW@cluster0.kmtoaw8.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (e) => {
    console.log(e ? e : "Connected successfully to database");
  }
);

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
