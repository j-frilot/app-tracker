const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const client = require("./db/dbconfig");
const path = require("path");

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// add headers to incoming req
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

////////////////////// ROUTING /////////////////////////

app.get("/", (req, res) => {
    res.send("<h1> This is for testing purposes only.</h1>");
});
//application-tracker-jf.netlify.app
https: app.get("/api", (req, res) => {
    res.json({
        "All Jobs": `https://application-tracker-api.herokuapp.com/api/jobs`,
        "New Jobs": `https://application-tracker-api.herokuapp.com/api/newjob`
    });
});

///////// all jobs, landing page, default

app.get("/api/jobs", async (req, res) => {
    try {
        const allJobs = await client.query(
            "SELECT * FROM joblist ORDER BY date_applied DESC;"
        );
        res.json(allJobs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//////// add jobs, POST

app.post("/api/newjob", async (req, res) => {
    const title = req.body.title;
    const company = req.body.company;
    const date_applied = req.body.date_applied;
    const date_denied = req.body.date_denied;
    const date_interview = req.body.date_interview;
    const reply_info = req.body.reply_info;
    const text =
        "INSERT INTO joblist (title, company, date_applied, date_denied, date_interview, reply_info) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
        title,
        company,
        date_applied,
        date_denied,
        date_interview,
        reply_info
    ];
    try {
        const addJob = await client.query(text, values);
        res.json(addJob.rows);
    } catch (err) {
        console.error(err.message);
    }
});

///////////////////////////////////////////////////////

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
