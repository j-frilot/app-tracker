import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const NewJob = () => {
    const [title, set_title] = useState("");
    const [company, set_company] = useState("");
    const [date_applied, set_date_applied] = useState("");
    const [date_denied, set_date_denied] = useState("");
    const [date_interview, set_date_interview] = useState("");
    const [reply_info, set_reply_info] = useState("");

    // function to send new job data to db
    const addJobFunction = (event) => {
        event.preventDefault();

        // logging out each field as a test to check
        console.log(
            title,
            company,
            date_applied,
            date_denied,
            date_interview,
            reply_info
        );

        const local = "http://localhost:4000/api/newjob";

        fetch(local, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                company,
                date_applied,
                date_denied,
                date_interview,
                reply_info
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    // var theDate = new Date();
    // var maxDate =
    //     theDate.getFullYear() +
    //     "-" +
    //     theDate.getDate() +
    //     "-" +
    //     (theDate.getMonth() + 1);
    // console.log(maxDate);

    return (
        <Accordion className="py-5">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add New Job</Accordion.Header>
                <Accordion.Body>
                    <Form className="m-2 text-center" onSubmit={addJobFunction}>
                        <Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        onChange={(event) => {
                                            set_title(event.target.value);
                                        }}
                                        placeholder="Enter Job Title"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="company"
                                        onChange={(event) => {
                                            set_company(event.target.value);
                                        }}
                                        placeholder="Enter Company Name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={4}>
                                <Form.Group>
                                    <Form.Label>Date Applied</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date_applied"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_applied(
                                                event.target.value
                                            );
                                        }}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col xs={6} sm={4}>
                                <Form.Group>
                                    <Form.Label>Interview Date:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date_interview"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_interview(
                                                event.target.value
                                            );
                                        }}
                                    />
                                    <Form.Text className="text-muted">
                                        Leave blank if none.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Group>
                                    <Form.Label>Date Denied</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date_denied"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_denied(event.target.value);
                                        }}
                                    />
                                    <Form.Text className="text-muted">
                                        Leave blank if none.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label>More Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="reply_info"
                                    onChange={(event) => {
                                        set_reply_info(event.target.value);
                                    }}
                                    placeholder="other interviews, meetings, presentations...etc"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                        </Row>
                        <Button
                            variant="secondary"
                            type="submit"
                            value="submit"
                            onClick={addJobFunction}
                            className="m-2"
                        >
                            Submit
                        </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default NewJob;
