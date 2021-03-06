const pool = require("../db/dbconfig");

const eachqueries = {
    table: "demo_job_list",
    //////////     ADD A JOB      //////////

    addJob: (req, res) => {
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
            addJob = pool.query(text, values, (error, results) => {
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
    },
    //////////     DELETE A JOB      //////////
    delete: (req, res) => {
        const id = req.params.id;
        try {
            pool.query(
                "DELETE FROM demo_job_list WHERE id = ?",
                [id],
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

module.exports = eachqueries;
