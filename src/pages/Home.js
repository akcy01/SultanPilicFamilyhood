import { React } from "react";
import "../styles/HomeStyless.css"

function Home() {
    return (
        <div className="homepage">
            <div className="homepage-container">
                <img src="images/homePageIntroduction.png" />
                <div className="vertical-Line1"></div>
                <h1>SULTAN PİLİÇ</h1>
                <h3>1997'den beri..</h3>
                <p>Kuruluş yılımız olan 1997'den bu yana damak tadınıza uygun, en taze ürünlerimizi sizlere sunmaktayız.</p>
                <button>Ürünleri Gör</button>
            </div>

            <div className="homepage-aboutUs">
                <img src="images/aboutUsBackground.png" />
                <hr className="horizontal-line1"/>
                <div className="box1">
                    <img src="images/boxImage1.jpg" alt="box-image1"/>
                </div>
                <div className="box2">
                    <img src="images/boxImage2.jpg" alt="box-image2"/>
                </div>
                <div className="box3">
                    <img src="images/boxImage3.jpg" alt="box-image3"/>
                </div>
                <hr className="horizontal-line2"/>
                <h1>HAKKIMIZDA</h1>
            </div>

        </div>
    )
}

export default Home;