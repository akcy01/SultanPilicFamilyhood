import React from "react";
import "../styles/DropdownMenuStyles.css"

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <ul className="aboutUsDropdownContent">
                <li><a href="urun1.html">Çiğ Ürünler</a></li>
                <li><a href="urun2.html">Pişmiş Ürünler</a></li>
            </ul>
        </div>
    );
};

export default DropdownMenu;