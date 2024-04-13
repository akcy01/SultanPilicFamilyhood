import React from 'react'
import "../styles/AboutUsStyless.css"


function AboutUs() {
  return (
    <>
      <section id='about-home' >
        <h2>HAKKIMIZDA</h2>
      </section>

      <section id='about-container'>
        <div className='about-img' alt="">
          <img src='images/aboutUsHome.png' />
        </div>

        <div className='about-text'>
          <h2>Hikayemiz</h2>
          <p>1997 yılında Mehmet Akçay tarafından kurulan iş yerimiz, o günden bu yana kaliteden ödün vermeden Banvit ürünleriyle toptan ve perakende satış yapmaktadır. Fatih Caddesi'nde başlayan bu serüven, zamanla ailemizin bir parçası olan Mete Akçay'ın katılımıyla daha da güçlendi. Babamız Mete Akçay'ın yetiştirilmesiyle birlikte iş yerimizi birlikte yönetmeye başladık.

            Deprem sonrası bir dönüm noktası yaşadık ve Liwan Hotel'in sahipleriyle işbirliği yaparak işimizi daha da büyüttük. Bugün, bu işbirliği sayesinde daha geniş bir kitleye ulaşıyor ve müşterilerimize daha iyi hizmet sunabiliyoruz.

            Geçmişimizden aldığımız güçle ve geleceğe olan inancımızla, müşterilerimize en iyi hizmeti sunmak için sürekli olarak çalışıyoruz. Müşteri memnuniyetini ve kalite standartlarını ön planda tutarak, her geçen gün daha da ileriye taşınmayı hedefliyoruz.

            Siz değerli müşterilerimizle birlikte, bu yolculuğumuzu devam ettirmekten büyük mutluluk duyuyoruz. Teşekkürlerimizle.</p>
        </div>
      </section>
    </>
  )
}

export default AboutUs