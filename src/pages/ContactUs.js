import React from 'react'
import "../styles/ContactUsStyless.css"
import 'font-awesome/css/font-awesome.min.css';

function ContactUs() {
  return (
    <>
      <section id="contact-home">
        <h2>Bize Ulaşın</h2>
      </section>

      <section id='contact'>
        <div className="getin">
          <h2>İrtibat Bilgileri</h2>
          <p>Bize Ulaşmak mı istiyorsunuz ? Formu doldurun veya diğer bilgilerimizi kullanın !</p>
          <div className='getin-details'>
            <h3>Merkezimiz</h3>
            <div>
              <i className='fa fa-home get'></i>
              <p>Arsuz Yolu Üzeri,Kaymakamlık Işıklarını Geçtikten Sonra, Cumhuriyet Caddesi - Arsuz / Hatay</p>
            </div>
            <h3>Telefon</h3>
            <div>
              <i class="fa fa-sharp fa-solid fa-phone get"></i>
              <p>+90 (501) 242 30 30</p>,,,,,,,
              <p>+90 (507) 402 32 32</p>
            </div>
            <h3>Mail</h3>
            <div>
              <i class="fa fa-solid fa-envelope get"></i>
              <p>sultanpilic@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='form'>
          <h4>İletişim</h4>
          <p>İlgili bilgilerinizi girerek, bizlere mail yoluyla da ulaşabilirsiniz !</p>
          <div className='form-row'>
            <input type='text' placeholder='İsminiz' />
            <input type='text' placeholder='Email' />
          </div>
          <div className='form-col'>
            <input type='text' placeholder='Konu' />
          </div>
          <div className='form-col'>
            <textarea name='' id='' cols="30" rows="8" placeholder='Size Nasıl Yardımcı Olabiliriz ? '> </textarea>
          </div>
          <div className='form-col'>
            <button>Mesaj Gönder</button>
          </div>
        </div>
      </section>

      <section id='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6420.731213095844!2d35.90786479915548!3d36.424541236100175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15260991f6581d4f%3A0x9c803938245f4512!2sBanvit%20Sultan%20Pili%C3%A7!5e0!3m2!1sen!2str!4v1713115254010!5m2!1sen!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default ContactUs