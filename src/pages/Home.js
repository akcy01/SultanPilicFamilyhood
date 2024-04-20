import { React } from "react";
import "../styles/HomeStyless.css"

function Home(props) {

    const receivedDataAtNavbar = props;

    const mobileControls = {
        isMobile: false,
    };

    const controls = {
        showHomePage: false
    };

    const defaultImageRoads = {
        homepageIntroductionBackground: "images/homePageIntroduction.png",
        aboutUsBackground: "images/aboutUsBackground.png",
        goalsAndMissionsBackground: "images/goalsAndMissions.png",
        homeBackground: "images/homePage.png",
    };

    if (receivedDataAtNavbar.data !== null) {
        if (!receivedDataAtNavbar.data.toggleButtonClicked)
            controls.showHomePage = true;
    }
    else
        controls.showHomePage = true;

    if (window.visualViewport.width <= 450) {
        mobileControls.isMobile = true;
        defaultImageRoads.homepageIntroductionBackground = "images/homePageIntroductionMobile.png";
        defaultImageRoads.aboutUsBackground = "images/aboutUsBackgroundMobile.png";
        defaultImageRoads.goalsAndMissionsBackground = "images/goalsAndMissionsMobile.jpg";
        defaultImageRoads.homeBackground = "images/homePage.png";
    }
    else
        mobileControls.isMobile = false;


    return (
        <div>
            {controls.showHomePage && (
                <>
                    <section className="home" id="home">
                        <div className="home-text">
                            <h1>Buyrun, misafirimiz olun ve gerçek lezzetin tadını çıkarın.</h1>
                            <a href="#" className="btn">Devamını Gör</a>
                        </div>

                        <div className="home-img">
                            <img src={defaultImageRoads.homeBackground} />
                        </div>
                    </section>

                    <section className="container-cont">
                        <div className="container-box">
                            <img src="images/c1.png" />
                            <h3>10:00 - 22:00</h3>
                            <a href="*"> Çalışma Saatleri </a>
                        </div>

                        <div className="container-box">
                            <img src="images/c2.png" />
                            <h3>Shell Yolu Üzeri</h3>
                            <a href="*"> Konuma Git </a>
                        </div>

                        <div className="container-box">
                            <img src="images/c3.png" />
                            <h3>+90 538 029 2000</h3>
                            <a href="*"> Bizi Arayın </a>
                        </div>
                    </section>

                    <section className="about" id="about">
                        <div className="about-img">
                            <img src="images/boxImage3.jpg" />
                        </div>

                        <div className="about-text">
                            <h2>İyi yaşamak, İyi beslenmekle başlar.</h2>
                            <p>Tavuklarımızı özenle seçiyor ve en titiz standartlara göre işliyoruz. En taze ve doğal malzemeleri kullanarak, sağlığınızı ve damak zevkinizi düşünerek hazırlıyoruz. Her bir ürünümüz, sağlık ve hijyen standartlarına tam uyumluluk göstermektedir.

                            </p>
                            <p>Dükkanımızda sunulan tavuk çeşitleri arasında, çıtır tavuk, ızgara tavuk, tavuk kanat, tavuk but, tavuk göğsü gibi birçok seçenek bulunmaktadır. Ayrıca sağlıklı yaşamı destekleyen salatalar ve lezzetli mezeler de menümüzde yer almaktadır.</p>
                            <p>
                            Müşteri memnuniyeti ve güveni bizim için her zaman önceliklidir. Tavuk ürünlerimizde en yüksek kalite ve tazelik standartlarını korumak için sürekli çaba gösteriyoruz. Müşterilerimize en iyi hizmeti sunmak ve onların sağlıklı beslenme ihtiyaçlarını karşılamak için var gücümüzle çalışıyoruz.
                            </p>
                            <p>Sağlıklı ve lezzetli tavuk ürünlerini keşfetmek ve deneyimlemek için sizi dükkanımıza bekliyoruz. Tadını çıkarın ve sağlıklı bir yaşam tarzına adım atın!</p>
                            <a href="#" className="btn">Devamını Gör</a>
                        </div>
                    </section>

                    <section className="mission" id="mission">
                        <div className="middle-text">
                            <h4>Misyonumuz & Vizyonumuz</h4>
                            <h2>Kuruluşumuzdan bu yana, kalitemizden ödün vermeden sizlere en sağlıklı hizmeti sunmaktayız...</h2>
                        </div>

                        <div className="mission-content">
                            <div className="row">
                                <img src="images/boxImage1.jpg" />
                                <h3>Misyonumuz</h3>
                                <p>En taze tavukları ve sağlıklı yan ürünleriyle müşterilerimize lezzetli bir deneyim sunuyoruz. Kalite ve güvenilirlik ilkelerimizle her zaman en iyisini hedefliyoruz.</p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <img src="images/boxImage2.jpg" />
                                <h3>Vizyonumuz</h3>
                                <p>Müşterilerimize en taze ve en lezzetli tavuk ürünlerini sunarak, herkesin sağlıklı beslenme tercihlerine destek olmayı ve keyifli bir yemek deneyimi yaşatmayı amaçlıyoruz. </p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <img src="images/bakedBoxImage4.jpg" />
                                <h3>Hedeflerimiz</h3>
                                <p>Hedeflerimiz doğrultusunda, her geçen gün daha fazla müşteriye ulaşmayı ve onların sağlıklı beslenme alışkanlıklarına katkıda bulunmayı amaçlıyoruz.  </p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row-btn">
                            <a href="#" className="btn"> Hakkımızda </a>
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}

export default Home;