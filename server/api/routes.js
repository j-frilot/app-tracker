const express = require("express");
const router = express.Router();
const allqueries = require("./allqueries");
const eachqueries = require("./eachqueries");

router.get("/api/jobs/datedesc", allqueries.dateDesc); //
router.get("/api/jobs/dateasc", allqueries.dateAsc);
router.get("/api/jobs/denied", allqueries.denied); //
router.get("/api/jobs/titleasc", allqueries.titleAsc); //
router.post("/api/newjob", eachqueries.addJob);
router.delete("/api/jobs/:id", eachqueries.delete);

module.exports = router;
