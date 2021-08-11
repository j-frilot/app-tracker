import Accordion from "react-bootstrap/Accordion";

const Accordian = (props) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>More</Accordion.Header>
                <Accordion.Body>
                    <p>{props.reply}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Accordian;
