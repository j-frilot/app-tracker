const express = require("express");
const app = express();
const pool = require("../db/dbconfig");

//////////     ALL JOBS IN DESC ORDER FROM DATE APPLIED      //////////
const allpost = {
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
}
allpost.exports = allpost;
