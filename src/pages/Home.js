import { React } from "react";
import "../styles/HomeStyless.css"
import Footer from '../components/Footer';

function Home(props) {

    const receivedDataAtNavbar = props;
    console.log(receivedDataAtNavbar);

    return (
        <div>
            { receivedDataAtNavbar.data.toggleButtonClicked !== true && (
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
                            <h1>HAKKIMIZDA</h1>
                            <p>
                                1997 yılında kurulan işletmemiz, müşterilerine en taze ve kaliteli çiğ tavuk ürünleri sunma amacıyla yola çıktı. Geçen yıllar içinde, gastronomi dünyasındaki değişimlere ayak uydurarak ürün yelpazemizi genişlettik. Başlangıçta sadece çiğ tavuk satışıyla tanınan dükkanımız, günümüzde artık pişirim hizmeti ve çeşitli meze seçenekleriyle müşterilerine zengin bir deneyim sunuyor.Taze ve sağlıklı ürünlerimizle damak zevkine önem veren müşterilerimize hizmet vermekten gurur duyuyoruz. Kalite, hijyen, ve lezzet konularında titizlikle çalışarak, müşterilerimize güvenilir ve keyifli bir alışveriş deneyimi sunuyoruz.</p>
                        </div>

                        <div className="homepage-goalsAndMissions">
                            <img src="images/goalsAndMissions.png" />
                            <div className="goals-container">
                                <h1>HEDEFLERİMİZ VE MİSYONLARIMIZ</h1>
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