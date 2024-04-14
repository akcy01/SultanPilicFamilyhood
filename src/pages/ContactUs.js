import React from 'react'
import "../styles/ContactUsStyless.css"

function ContactUs() {
  return (
    <>
        <section id="contact-home">
            <h2>Bize Ulaşın</h2>
        </section>

        <section id="contact">
            <div className='getin'>
                <h2>İrtibat Bilgileri</h2>
                <p>Bize Ulaşmak mı istiyorsunuz ? Formu doldurun veya diğer bilgilerimizi kullanın !</p>
                <div className='getin-details'>
                  <h3>Merkezimiz</h3>
                  <div>
                    <i className='far fa-home get'></i>
                    <p>burası adresimiz yazacak urada</p>
                  </div>
                  <h3>Telefon</h3>
                  <div>
                    <i className='fas fa-phone-alt get'></i>
                    <p>burası adresimiz yazacak urada</p>
                  </div>
                  <h3>Mail</h3>
                  <div>
                    <i className='fal fa-envelope-open-tet get'> </i>
                    <p>burası adresimiz yazacak urada</p>
                  </div>
                </div>
            </div>

            <div className='form'>
              <h4>İletişim</h4>
              <p>İlgili bilgilerinizi girerek, bizlere mail yoluyla da ulaşabilirsiniz !</p>
              <div className='form-row'>
                  <input type='text' placeholder='İsminiz'/>
                  <input type='text' placeholder='Email'/>
              </div>
              <div className='form-col'>
                  <input type='text' placeholder='Konu'/>
              </div>
              <div className='form-col'>
                <textarea name='' id='' cols="30" rows="8" placeholder='Size Nasıl Yardımcı Olabiliriz ? '> </textarea>
              </div>
              <div className='form-col'>
                  <button>Mesaj Gönder</button>
              </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs