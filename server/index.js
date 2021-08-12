const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const pool = require("./db/dbconfig");
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// add headers to incoming req
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/", require("./api/routes"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
