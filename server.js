const connectToMongo = require("./db");
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const cookieparser = require("cookie-parser");

connectToMongo();
const app = express();

app.use(express.json()); // for body parsing..
app.use(cors());
app.use(cookieparser());
app.use(bodyParser.json());

const port = 5000 ;

app.get("/", (req, res) => {
  res.status(500).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
