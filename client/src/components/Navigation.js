import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Navigation = () => {
    return (
        <section className="d-flex justify-content-center">
            <button className="btn btn-outline-info">
                <NavLink to="/">
                    Date <FaArrowDown />
                </NavLink>
            </button>

            <button className="btn btn-outline-info">
                <NavLink to="/denied">Denied</NavLink>
            </button>
            <button className="btn btn-outline-info">
                <NavLink to="/title">Title A-Z </NavLink>
            </button>
        </section>
    );
};

export default Navigation;
