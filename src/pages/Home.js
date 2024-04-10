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
        homeBackground: "images/homePage.png"
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
    }
    else
        mobileControls.isMobile = false;


    return (
        <div>
            {controls.showHomePage && (
                <>
                    <section className="home" id="home">
                        <div className="home-text">
                            <h1>Gelin Yiyin ve gerçek lezzetin tadını çıkarın. </h1>
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
                            <h2>İyi yaşamak, iyi beslenmekle başlar.</h2>
                            <p>asdfa sdfqwefqw asdfkjs nkjqwnfjqwn efkjqwn efkjqwnekfjjjjjqkw jnkf qwejoıqwjo ıqjwfoıejfoqwıfj salkdqlwknelrqw oıjqwofıqwjeq qkwenlqkwe</p>
                            <a href="#" className="btn">Devamını Gör</a>
                        </div>
                    </section>

                    <section className="mission" id="mission">
                        <div className="middle-text">
                            <h4>Misyonumuz</h4>
                            <h2>Lets check our mission and vision</h2>
                        </div>

                        <div className="mission-content">
                            <div className="row">
                                <img src="images/boxImage1.jpg" />
                                <h3>Misyonumuz</h3>
                                <p>asdfqaet qwdfqwefkj qkwjnefqkwjfoı jasdjfoqwepo  mksadlf</p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <img src="images/boxImage2.jpg" />
                                <h3>Vizyonumuz</h3>
                                <p>asdfqaet qwdfqwefkj qkwjnefqkwjfoı jasdjfoqwepo  mksadlf</p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <img src="images/bakedBoxImage4.jpg" />
                                <h3>Hedeflerimiz</h3>
                                <p>asdfqaet qwdfqwefkj qkwjnefqkwjfoı jasdjfoqwepo  mksadlf</p>
                                <div className="in-text">
                                    <div className="s-btnn">
                                        <a href="#"> Devamını Gör </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row-btn">
                            <a href="#" className="btn"> Devamını Gör </a>
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}

export default Home;