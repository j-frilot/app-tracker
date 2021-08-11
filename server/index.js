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

//////////     ALL JOBS IN DESC ORDER FROM DATE APPLIED      //////////
app.get("/api/jobs", (req, res) => {
    try {
        const allJobs = pool.query(
            "SELECT * FROM demo_job_list ORDER BY date_applied DESC",
            (error, results) => {
                if (!error) {
                    if (results.length == 1) {
                        res.json(...results);
                        res.render(...results);
                    } else {
                        res.json(results);
                    }
                } else {
                    console.log("Query Error", error);
                }
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

//////////     ADD A JOB      //////////
app.post("/api/newjob", (req, res) => {
    const title = req.body.title;
    const company = req.body.company;
    const date_applied = req.body.date_applied;
    const date_denied = req.body.date_denied;
    const date_interview = req.body.date_interview;
    const reply_info = req.body.reply_info;
    const text =
        "INSERT INTO demo_job_list (title, company, date_applied, date_denied, date_interview, reply_info) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        title,
        company,
        date_applied,
        date_denied,
        date_interview,
        reply_info
    ];
    try {
        const addJob = pool.query(text, values, (error, results) => {
            if (!error) {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Query Error", error);
            }
        });
    } catch (err) {
        console.error(err.message);
    }
});

// //////////     DELETE JOB      //////////
// app.delete("/api/jobs/:id", (req, res) => {
//     const job_id = req.body.job_id;
//     try {
//         const deleteJob = pool.query(
//             `DELETE FROM demo_job_list WHERE job_id = ?`,
//             [job_id],
//             (error, results) => {
//                 if (!error) {
//                     if (results.length == 1) {
//                         res.json(...results);
//                         res.render(...results);
//                     } else {
//                         res.json(results);
//                     }
//                     return "Job deleted";
//                 } else {
//                     console.log("Query Error", error);
//                 }
//             }
//         );
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
