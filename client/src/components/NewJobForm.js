import React, { useState } from "react";

const NewJob = () => {
    const [title, set_title] = useState("");
    const [company, set_company] = useState("");
    const [date_applied, set_date_applied] = useState("");
    const [date_denied, set_date_denied] = useState("");
    const [date_interview, set_date_interview] = useState("");
    const [reply_info, set_reply_info] = useState("");

    const addJobFunction = (event) => {
        event.preventDefault();
        const local = "  http://localhost:4000/api/newjob";

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
        window.location.reload();
    };

    return (
        <section className="accordion py-3" id="formAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="formAccordionHeadingOne">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#formActivate"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Add New Job
                    </button>
                </h2>
                <div
                    id="formActivate"
                    class="accordion-collapse collapse"
                    aria-labelledby="formAccordionHeadingOne"
                    data-bs-parent="#formAccordion"
                >
                    <div class="accordion-body">
                        <form
                            className="m-2 text-center"
                            onSubmit={addJobFunction}
                        >
                            <div className="row">
                                <div className="col">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                    >
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        onChange={(event) => {
                                            set_title(event.target.value);
                                        }}
                                        placeholder="Enter Job Title"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="company"
                                        className="form-label"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="form-control"
                                        onChange={(event) => {
                                            set_company(event.target.value);
                                        }}
                                        placeholder="Enter Company Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label
                                        htmlFor="date_applied"
                                        className="form-label"
                                    >
                                        Date Applied
                                    </label>
                                    <input
                                        type="date"
                                        name="date_applied"
                                        className="form-control"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_applied(
                                                event.target.value
                                            );
                                        }}
                                        required
                                    />
                                </div>

                                <div className="col-sm-4">
                                    <label
                                        htmlFor="date_interview"
                                        className="form-label"
                                    >
                                        Interview Date:
                                    </label>
                                    <input
                                        type="date"
                                        name="date_interview"
                                        className="form-control"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_interview(
                                                event.target.value
                                            );
                                        }}
                                    />
                                    <div className="form-text text-muted">
                                        Leave blank if none.
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <label
                                        htmlFor="date_denied"
                                        className="form-label"
                                    >
                                        Date Denied
                                    </label>
                                    <input
                                        type="date"
                                        name="date_denied"
                                        className="form-control"
                                        max="2021-12-12"
                                        onChange={(event) => {
                                            set_date_denied(event.target.value);
                                        }}
                                    />
                                    <div className="form-text text-muted">
                                        Leave blank if none.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label
                                    htmlFor="reply_info"
                                    className="form-label"
                                >
                                    More Info
                                </label>
                                <input
                                    as="textarea"
                                    name="reply_info"
                                    className="form-control"
                                    onChange={(event) => {
                                        set_reply_info(event.target.value);
                                    }}
                                    placeholder="other interviews, meetings, presentations...etc"
                                />
                            </div>
                            <button
                                type="submit"
                                value="submit"
                                onClick={addJobFunction}
                                className="btn btn-outline-info m-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewJob;
