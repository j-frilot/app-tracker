import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">DateDesc</NavLink>
            </li>
            <li>
                <NavLink to="/denied">Denied</NavLink>
            </li>
            <li>
                <NavLink to="/title">Title</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
