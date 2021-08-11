import Accordian from "./Accordian";
import Card from "react-bootstrap/Card";
import DeleteButton from "./DeleteButton";
import { FaUserEdit, FaUserFriends, FaUserSlash } from "react-icons/fa";

const JobCard = (props) => {
    return (
        <Card className="job-card mt-3">
            <Card.Title className="text-center p-3">
                {props.title}
                <DeleteButton id={props.id} />
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
