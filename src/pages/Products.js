import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../styles/ProductsStyless.css"

function Products(props) {

  const receivedDataAtNavbar = props;

  const mobileControls = {
    isMobile: false,
  };

  const controls = {
    showProducts: true,
  };


  if (receivedDataAtNavbar.data) {
    if (!receivedDataAtNavbar.data.toggleButtonClicked)
      controls.showProducts = true;
    else
      controls.showProducts = false;
  }



  if (window.visualViewport.width <= 450) {
    mobileControls.isMobile = true;
  }
  else
    mobileControls.isMobile = false;


  const [step1Class, setstep1Class] = useState('slide-container active');
  const [step2Class, setstep2Class] = useState('slide-container');
  const [step3Class, setstep3Class] = useState('slide-container');

  const step1 = 1;
  const step2 = 2;
  const step3 = 3;

  let step = 0;

  if (step1Class === 'slide-container active')
    step = step1
  if (step2Class === 'slide-container active')
    step = step2
  if (step3Class === 'slide-container active')
    step = step3

  const next = function () {
    if (step !== step3) {
      step++;
      activeStep(step);
    }
  };

  const prev = function () {
    if (step !== step1) {
      step--;
      activeStep(step);
    }
  };

  const activeStep = function (step) {
    switch (step) {
      case step1:
        setstep1Class('slide-container active')
        setstep2Class('slide-container');
        setstep3Class('slide-container');
        break;

      case step2:
        setstep1Class('slide-container')
        setstep2Class('slide-container active')
        setstep3Class('slide-container')
        break;

      case step3:
        setstep2Class('slide-container')
        setstep1Class('slide-container')
        setstep3Class('slide-container active')
        break;

      default:
        break;
    }
  }



  return (
    <div>
      {controls.showProducts && (
        <div className='container'>
          <div className={step1Class}>
            <div className='slide'>
              <div className='content'>
                <h3>Pişmiş Ürünler</h3>
                <p>Uzman ellerde pişirilmiş, ızgara, şiş, kuşbaşı, göğüs, incik, kelebek gibi çeşitlerle zenginleştirdiğimiz taze ve lezzetli ürünlerimizle sofralarınıza keyif katıyoruz.</p>
                <a className='btn'><Link to="/bakedProducts"> Devamını Gör </Link></a>
              </div>
              <div className='image'>
                <img src='images/bakedBoxImage2.jpg' alt='' />
              </div>
            </div>
          </div>

          <div className={step2Class}>
            <div className='slide'>
              <div className='content'>
                <h3>Çiğ Ürünler</h3>
                <p>Sağlık ve lezzet arayanların tercihi olan çiğ ürünlerimiz, en taze ve kaliteli malzemelerle hazırlanmıştır. Geniş ürün yelpazemizde bulunan çeşitlerle, her damak zevkine uygun seçenekler sunuyoruz. </p>
                <a href='*' className='btn'> Devamını Gör </a>
              </div>
              <div className='image'>
                <img src='images/bakedBoxImage2.jpg' />
              </div>
            </div>
          </div>

          <div className={step3Class}>
            <div className='slide'>
              <div className='content'>
                <h3>Mezeler</h3>
                <p>Renkli ve lezzetli mezelerimiz, damak zevkinize uygun birbirinden özel seçenekler sunuyor. Taze ve doğal malzemelerle hazırlanan mezelerimiz, yemeklerinize eşlik ederken sofralarınıza ferahlık ve lezzet katıyor.</p>
                <a href='*' className='btn'> Devamını Gör </a>
              </div>
              <div className='image'>
                <img src='images/bakedBoxImage3.jpg' />
              </div>
            </div>
          </div>

          <div id='prev' onClick={prev}> {'<'} </div>
          <div id='next' onClick={next}> {'>'}</div>

        </div>
      )
      }
    </div>
  )
}

export default Products;