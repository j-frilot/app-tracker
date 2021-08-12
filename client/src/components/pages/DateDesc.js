import React, { useState, useEffect } from "react";
// import joblist from "../data/joblist";   use this with list in datasection if not using db
import JobCard from "../JobCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DateDesc = () => {
    const [joblist, setJoblist] = useState([]);

    useEffect(() => {
        const local = "http://localhost:4000/api/jobs/datedesc";

        fetch(local)
            .then((res) => res.json())
            .then((res) => {
                setJoblist(res);
            });
    }, []);

    return (
        <Row>
            {joblist.map((jobs) => (
                <Col xs={12} sm={6} md={4} key={jobs.id}>
                    <JobCard
                        id={jobs.id}
                        title={jobs.title}
                        company={jobs.company}
                        date_applied={jobs.date_applied}
                        date_interview={jobs.date_interview}
                        date_denied={jobs.date_denied}
                        reply_info={jobs.reply_info}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default DateDesc;
