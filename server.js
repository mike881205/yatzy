const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const path = __dirname + '/app/views/';
db = require("./app/models");

app.use(express.static(path));
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.use(routes);
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});