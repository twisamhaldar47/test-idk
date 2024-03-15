const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

const port = process.env.PORT || 3000;
//comment
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
