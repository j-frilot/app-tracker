const express = require("express");
const router = express.Router();
const allqueries = require("./allqueries");
const eachqueries = require("./eachqueries");

router.get("/api/jobs", allqueries.allJobs);
router.get("/api/jobs/asc", allqueries.allJobsAsc);
router.get("/api/jobs/denied", allqueries.denied);
router.get("/api/jobs/interview", allqueries.interview);
router.post("/api/newjob", eachqueries.addJob);
router.delete("/api/jobs/:id", eachqueries.delete);

module.exports = router;
