import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "../styles/NavbarStyles.css"

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const openDropdown = function () {
        setDropdownOpen(true)
    };

    const closeDropwdown = function () {
        setDropdownOpen(false)
    };

    return (
        <div>
            <nav>
                <img src="images/sultanLogo.png" alt="mainLogo" className="logo" />
                <div>
                    <ul className="navbar" >
                        <li><a href="index.html">Ana Sayfa</a></li>
                        <div className="productMenu" onMouseEnter={openDropdown} onMouseLeave={closeDropwdown}>
                            <li ><a href="cde.html" className="products" >Ürünlerimiz</a>
                                {isDropdownOpen && <DropdownMenu />}
                            </li>
                        </div>
                        <li><a href="asd.html" >Hakkımızda</a></li>
                        <li><a href="asd.html" >İletişim</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;