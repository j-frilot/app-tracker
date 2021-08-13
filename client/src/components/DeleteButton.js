import { FaTrashAlt } from "react-icons/fa";

const Delete = (props) => {
    const deleteJob = () => {
        console.log(props.id);
        fetch(` http://localhost:4000/api/jobs/${props.id}`, {
            method: "DELETE"
        }).then((res) => {
            res.json().then((resp) => {
                console.log(resp);
            });
        });

        window.location.reload();
    };

    return (
        <button type="button" className="btn float-end p-0">
            <FaTrashAlt size={15} onClick={deleteJob} />
        </button>
    );
};

export default Delete;
