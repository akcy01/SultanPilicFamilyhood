import { React } from "react";
import "../styles/HomeStyless.css"
import Footer from '../components/Footer';

function Home(props) {

    const receivedDataAtNavbar = props;

    const mobileControls = {
        isMobile: false
    };

    const defaultImageRoads = {
        homepageIntroductionBackground: "images/homePageIntroduction.png",
        aboutUsBackground: "images/aboutUsBackground.png",
        goalsAndMissionsBackground: "images/goalsAndMissions.png"
    };

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
            {receivedDataAtNavbar.data.toggleButtonClicked !== true && (
                <div className="homepage">
                    <div className="homepage-container">
                        <img src={defaultImageRoads.homepageIntroductionBackground} />
                        <div className="vertical-Line-container">
                            <div className="vertical-Line1"></div>
                        </div>

                        <h1>SULTAN PİLİÇ</h1>
                        <h3>1997'den beri..</h3>
                        <p>Kuruluş yılımız olan 1997'den bu yana damak tadınıza uygun, en taze ürünlerimizi sizlere sunmaktayız.</p>
                        <button>Ürünleri Gör</button>
                    </div>

                    <div className="homepage-aboutUs">

                        <img src={defaultImageRoads.aboutUsBackground} />

                        <div className="horizontal-line1"></div>
                        <div className="box1">
                            <img src="images/boxImage1.jpg" alt="box-image1" />
                        </div>
                        <div className="box2">
                            <img src="images/boxImage2.jpg" alt="box-image2" />
                        </div>
                        <div className="box3">
                            <img src="images/boxImage3.jpg" alt="box-image3" />
                        </div>
                        <hr className="horizontal-line2" />

                        {mobileControls.isMobile ? (
                            <div className="aboutUs-mobile-container">
                                <div className="aboutUs-mobile-contains">
                                    <h1>HAKKIMIZDA</h1>
                                    <p>
                                        1997 yılında kurulan işletmemiz, müşterilerine en taze ve kaliteli çiğ tavuk ürünleri sunma amacıyla yola çıktı. Geçen yıllar içinde, gastronomi dünyasındaki değişimlere ayak uydurarak ürün yelpazemizi genişlettik. Başlangıçta sadece çiğ tavuk satışıyla tanınan dükkanımız, günümüzde artık pişirim hizmeti ve çeşitli meze seçenekleriyle müşterilerine zengin bir deneyim sunuyor.
                                    </p>
                                </div>
                                <button>
                                    <div>
                                        Devamını Gör
                                    </div>
                                </button>
                            </div>
                        ) : (
                            <div className="aboutUs-desktop-container">
                                <h1>HAKKIMIZDA</h1>
                                <p>
                                    1997 yılında kurulan işletmemiz, müşterilerine en taze ve kaliteli çiğ tavuk ürünleri sunma amacıyla yola çıktı. Geçen yıllar içinde, gastronomi dünyasındaki değişimlere ayak uydurarak ürün yelpazemizi genişlettik. Başlangıçta sadece çiğ tavuk satışıyla tanınan dükkanımız, günümüzde artık pişirim hizmeti ve çeşitli meze seçenekleriyle müşterilerine zengin bir deneyim sunuyor.Taze ve sağlıklı ürünlerimizle damak zevkine önem veren müşterilerimize hizmet vermekten gurur duyuyoruz. Kalite, hijyen, ve lezzet konularında titizlikle çalışarak, müşterilerimize güvenilir ve keyifli bir alışveriş deneyimi sunuyoruz.</p>
                            </div>
                        )}
                    </div>

                    <div className="homepage-goalsAndMissions">
                        <img src={defaultImageRoads.goalsAndMissionsBackground} />
                        <div className="goals-container">
                            {mobileControls.isMobile ? (
                                <div className="goals-container-mobile">
                                    <h1>VİZYON & MİSYON</h1>
                                    <h3>Kalite ve sağlık odaklı ürünler, güvenilir hizmet anlayışımızla birleşiyor ve 1997'den beri müşterilerimize taze ve lezzetli ürünleri sunmanın gururunu yaşıyoruz.</h3>

                                    <div className="mission-vision-container">
                                        <div className="mission-header">
                                            <div>MİSYON</div>
                                        </div>
                                        <div className="mission-field">
                                            <p>
                                                deneme deneme deneme deneme deneme deneme deneme deneme deneme
                                            </p>
                                        </div>

                                        <div className="vision-header">
                                            <div>VİZYON</div>
                                        </div>
                                        <div className="vision-field">
                                            <p>
                                                deneme deneme deneme deneme deneme deneme deneme deneme deneme
                                            </p>
                                        </div>
                                    </div>
                                    <button>
                                        <div>
                                            Devamını Gör
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h1>VİZYON & MİSYON</h1>
                                    <h3>asdfqweuırhqıwu qwıuerqwıue qwıueh qwerıu asdfqwe qw qwe qwer qwerqwteasdfas asdfasdfasdfasdf</h3>
                                    <div class="box">
                                        <h2>Tarihçe</h2>
                                        <hr class="inner-line" />
                                        <p>u bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.Bu bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.</p>
                                    </div>
                                    <div class="box">
                                        <h2>Misyonumuz</h2>
                                        <hr class="inner-line" />
                                        <p>u bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.Bu bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.</p>
                                    </div>
                                    <div class="box">
                                        <h2>Vizyonumuz</h2>
                                        <hr class="inner-line" />
                                        <p>u bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.Bu bölüm kelimeleri doğru şekilde kullanmanıza yardımcı olacaktır. Bir kelimenin bağlam içinde nasıl kullanılacağını anlamak genellikle çeviriden daha kolaydır. Her sayfa birkaç örnek cümle ile gösterilmiştir ve istediğiniz zaman bir çeviri sayfasına geri dönebilirsiniz. Ayrıca, doğrudan bölümün dahili arama motorunu kullanarak da kelime arayabilirsiniz. 18 dilde örnekler bulacaksınız.</p>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <Footer />
                </div>
            )
            }
        </div>
    )
}

export default Home;