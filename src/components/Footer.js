import { React } from "react"
import "../styles/FooterStyless.css"

function Footer(props) {

    const receivedDataFromNavbar = props;

    const controls = {
        showFooter: true,
    }

    if (receivedDataFromNavbar.data !== null)
        if (receivedDataFromNavbar.data.toggleButtonClicked)
            controls.showFooter = false;


    return (
        <div>
            {controls.showFooter && (
                <div className="footer-container">
                    <div className="sb-footer section-padding">
                        <div className="sb-footer-links">
                            <div className="sb-footer-links-div">
                                <h4>Ürünlerimiz</h4>
                                <a href="*">
                                    <p>Çiğ Ürünler</p>
                                </a>
                                <a href="*">
                                    <p>Pişmiş Ürünler</p>
                                </a>
                                <a href="*">
                                    <p>Mezeler</p>
                                </a>
                            </div>
                            <div className="sb-footer-links-div">
                                <h4>Hakkımızda</h4>
                                <a href="*">
                                    <p>Misyonumuz</p>
                                </a>
                                <a href="*">
                                    <p>Vizyonumuz</p>
                                </a>
                                <a href="*">
                                    <p>Tarihçemiz</p>
                                </a>
                            </div>
                            <div className="sb-footer-links-div">
                                <h4>İş Ortakları</h4>
                                <a href="*">
                                    <p>Banvit</p>
                                </a>
                                <a href="*">
                                    <p>Liwan Hotel</p>
                                </a>
                            </div>
                            <div className="sb-footer-links-div">
                                <h4>İletişim</h4>
                                <a href="*">
                                    <p>Bize Ulaşın</p>
                                </a>
                                <a href="*">
                                    <p>Bize Katılın</p>
                                </a>
                                <a href="*">
                                    <p>Konum</p>
                                </a>
                            </div>
                            <div className="sb-footer-links-div">
                                <h4>Sosyal Medya</h4>
                                <div className="social-media">
                                    <a><p><img src="images/whatsappLogo.png" /></p></a>
                                    <a><p><img src="images/instagramLogo.png" /></p></a>
                                    <a><p><img src="images/phoneLogo.png" /></p></a>
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="sb-footer-below">
                            <div className="sb-footer-copyright">
                                <p>
                                    @{new Date().getFullYear()} Design and developed by AkcayTech. All rights reserved.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer;