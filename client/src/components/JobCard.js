import MoreInfoAccordian from "./MoreInfoAccordian";
import DeleteButton from "./DeleteButton";
import { FaUserEdit, FaUserFriends, FaUserSlash } from "react-icons/fa";

const JobCard = (props) => {
    return (
        <section className="card mt-3 job-card">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {props.title}
                    <DeleteButton id={props.id} />
                </h2>

                <h3 className="card-subtitle text-center fs-4 pb-3">
                    {props.company}
                </h3>

                <div className="card-text">
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
                </div>

                <MoreInfoAccordian id={props.id} reply={props.reply_info} />
            </div>
        </section>
    );
};

export default JobCard;
