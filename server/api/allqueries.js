const pool = require("../db/dbconfig");

const allqueries = {
    table: "demo_job_list",
    //////////     ALL JOBS BY DATE APPLIED, RECENT TO LAST      //////////
    allJobs: (req, res) => {
        try {
            pool.query(
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
    },
    //////////     ALL JOBS BY DATE APPLIED, LAST TO RECENT      //////////
    allJobsAsc: (req, res) => {
        try {
            pool.query(
                "SELECT * FROM demo_job_list ORDER BY date_applied",
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
    },
    //////////     JOBS DENIED FROM ORDERED MOST RECENT FIRST      //////////
    denied: (req, res) => {
        try {
            pool.query(
                `SELECT * FROM demo_job_list WHERE date_denied IS NOT NULL ORDER BY date_denied DESC`,
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
    },
    //////////     JOBS ORDERED BY INTERVIEW      //////////
    interview: (req, res) => {
        try {
            pool.query(
                `SELECT * FROM demo_job_list WHERE date_interview IS NOT NULL ORDER BY date_interview DESC`,
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
    }
};

module.exports = allqueries;
