const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
});

app.get("/test", (req, res) => {
    res.send(`Hello test!`);
  });

  app.get("/jane", (req, res) => {
    res.send(`Hello Jane!`);
  });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
