import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "../styles/NavbarStyles.css"
import Home from "../pages/Home";

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = useState("nav-menu");
    const [icon, setIcon] = useState("nav-toggler");
    const [sendDataHomeComponent, setDataHomeComponent] = useState({});

    const homeComponentControls = {
        toggleButtonClicked : false,
    }

    const navToggle = function () {
        if (active === "nav-menu")
            setActive("nav-menu nav-active");
        else
            setActive("nav-menu");

        if (icon === "nav-toggler")
            setIcon("nav-toggler toggle");
        else
            setIcon("nav-toggler");

        if (window.visualViewport.width <= 450){
            homeComponentControls.toggleButtonClicked = true;
            setDataHomeComponent(homeComponentControls);
        }

    };

    const openDropdown = function () {
        if (active !== "nav-menu nav-active")
            setDropdownOpen(true)
    };

    const closeDropwdown = function () {
        setDropdownOpen(false)
    };

    return (
        <div className="container">
            <nav className="nav">
                <img src="images/sultanLogo.png" alt="mainLogo" className="logo" />
                <ul className={active}>
                    <li><a href="index.html">Ana Sayfa</a></li>
                    <div className="productMenu" onMouseEnter={openDropdown} onMouseLeave={closeDropwdown}>
                        <li ><a href="cde.html" className="products" >Ürünlerimiz</a>
                            {isDropdownOpen && <DropdownMenu />}
                        </li>
                    </div>
                    <li><a href="*" >Hakkımızda</a></li>
                    <li><a href="*" >İletişim</a></li>
                </ul>
                <div onClick={navToggle} className={icon} >
                    <div className="toggler1"></div>
                    <div className="toggler2"></div>
                    <div className="toggler3"></div>
                </div>
            </nav>
            <Home data={sendDataHomeComponent} />
        </div>
    );
}

export default Navbar;