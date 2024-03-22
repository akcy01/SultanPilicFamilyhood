import React from "react";
import "../styles/DropdownMenuStyles.css"
import { Link } from "react-router-dom";

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <ul className="aboutUsDropdownContent">
                <li><Link to="/rawProducts"> Çiğ Ürünler </Link></li>
                <li><Link to="/bakedProducts"> Pişmiş Ürünler </Link></li>
            </ul>
        </div>
    );
};

export default DropdownMenu;