const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const port = process.env.PORT || 7581;

// const jsonParser = bodyParser.json();
// const urlencodeParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
