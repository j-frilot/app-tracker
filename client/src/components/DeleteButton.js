import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Delete = (props) => {
    // const props.deleteFunction = () => {
    //     console.log("delete");
    // };

    return (
        <button type="button" className="btn float-end p-0">
            <FaTrashAlt size={15} />
        </button>
    );
};

export default Delete;
