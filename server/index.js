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
