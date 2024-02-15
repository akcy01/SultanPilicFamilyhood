import { useState } from "react";
import "../styles/NavbarStyles.css"

function Navbar() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    let openDropdown = function () {
        setDropdownOpen(true)
    }

    let closeDropwdown = function () {
        setDropdownOpen(false)
    }

    return (
        <div>
            <nav>
                <img src="images/sultanLogo.png" alt="mainLogo" className="logo" />

                <div>
                    <ul className="navbar">
                        <li><a href="index.html">Ana Sayfa</a></li>
                        <li onMouseEnter={openDropdown} onMouseLeave={closeDropwdown}><a href="index.html" className="products" >Ürünlerimiz</a>
                            {isDropdownOpen && (
                                   <ul className="aboutUsDropdownContent">
                                   <li><a href="urun1.html">Çiğ Ürünler</a></li>
                                   <li><a href="urun2.html">Pişmiş Ürünler</a></li>
                               </ul>
                            )}
                        </li>
                        <li><a href="index.html">Hakkımızda</a></li>
                        <li><a href="index.html">İletişim</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;