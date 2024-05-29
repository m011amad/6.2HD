const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/routes");
const controller = require("./controllers/controller");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

async function startServer() {
  await controller.initializeCollection();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
module.exports = app;
startServer();
