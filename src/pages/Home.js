import { React } from "react";
import "../styles/HomeStyless.css"

function Home() {
    return (
        <div className="homepage">
            <div className="homepage-container">
                <img src="images/homePageIntroduction.png" />
                <h1>SULTAN PİLİÇ</h1>
                <p>Damak tadınıza uygun lezzetler.</p>
                <button>Ürünleri Gör</button>
            </div>
            <div className="homepage-aboutUs">
                Hakkımızda
            </div>

        </div>
    )
}

export default Home;