// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import Card from "react-bootstrap/Card";
import DeleteButton from "./DeleteButton";
import { FaUserEdit, FaUserFriends, FaUserSlash } from "react-icons/fa";

const JobCard = (props) => {
    //     const [jobs, deletedJobs] = useState([]);
    // const job_id = props
    //     const deleteJobFunction = () => {
    //         fetch(`http://localhost:4000/api/jobs/$props.idx`, {
    //             method: "DELETE"
    //         })
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 console.log(response);
    //                 deletedJobs(response);
    //                 console.log(jobs);
    //                 console.log(deletedJobs);
    //             });
    //     };

    //     useEffect(() => {
    //         console.log(jobs);
    //     });

    // const deleteJobFunction = () => {
    //     console.log(props.job_id);
    //     fetch(`http://localhost:4000/api/jobs/${props.job_id}`, {
    //         method: "DELETE"
    //     }).then((res) => {
    //         res.json().then((resp) => {
    //             console.log(resp);
    //         });
    //     });
    // };

    return (
        <Card className="job-card mt-3">
            <Card.Title className="text-center p-3">
                {props.title}
                <DeleteButton />
            </Card.Title>

            <Card.Subtitle className="text-center">
                {props.company}
            </Card.Subtitle>
            <Card.Body>
                <ul>
                    <li className="d-flex justify-content-between">
                        <p>
                            <FaUserEdit /> Date Applied:
                        </p>
                        <p>{props.date_applied}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p>
                            <FaUserFriends /> Interview Date:
                        </p>
                        <p>
                            {props.date_interview === null
                                ? "N/A"
                                : props.date_interview}
                        </p>
                    </li>

                    <li className="d-flex justify-content-between">
                        <p>
                            <FaUserSlash /> Date Denied:
                        </p>
                        <p>
                            {props.date_denied === null
                                ? "N/A"
                                : props.date_denied}
                        </p>
                    </li>
                </ul>

                <Accordian reply={props.reply_info} />
            </Card.Body>
        </Card>
    );
};

export default JobCard;
