const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const path = __dirname + '/app/views/';
db = require("./app/models");

app.use(express.static(path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
app.get('/', (req, res) => {
  res.sendFile(path + "index.html");
});
app.use(routes);
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});