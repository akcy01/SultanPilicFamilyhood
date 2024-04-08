import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "../styles/NavbarStyles.css"

function Navbar(props, sendDataToHome) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = useState("nav-menu");
    const [icon, setIcon] = useState("nav-toggler");

    const handleClick = function (data) {
        props.sendDataToHome(data);
    };

    const homeComponentControls = {
        toggleButtonClicked: false,
    }

    const controls = {
        mobileClick: false,
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


        if (window.visualViewport.width <= 450) {

            if (icon === "nav-toggler") {
                homeComponentControls.toggleButtonClicked = true;
                handleClick(homeComponentControls)
            }
            else if (icon === "nav-toggler toggle") {
                homeComponentControls.toggleButtonClicked = false;
                handleClick(homeComponentControls)
            }
        }
    };

    const openDropdown = function () {
        if (active !== "nav-menu nav-active")
            setDropdownOpen(true)
    };

    const closeDropwdown = function () {
        setDropdownOpen(false)
    };

    const setToggle = function() {
        setActive("nav-menu");
        controls.mobileClick = true;
    }

    return (
        <div className="container">
            <nav className="nav">
                <img src="images/sultanLogo.png" alt="mainLogo" className="logo" />
                <ul className={active}>
                    <li onClick={setToggle}><Link to="/"> Ana Sayfa </Link></li>
                    <div className="productMenu" onMouseEnter={openDropdown} onMouseLeave={closeDropwdown}>
                        <li><Link to="/products" className="products"> Ürünlerimiz </Link>
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
        </div>
    );
}

export default Navbar;