import React from 'react'
import "../styles/ProductsStyless.css"

function Products() {

  const step1 = 1
  const step2 = 2
  const step3 = 3

  const step = step1;


  return (
    <div className='container'>
      <div className='slide-container'>
        <div className='slide'>
          <div className='content'>
            <h3>Pişmiş Ürünler</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram</p>
            <a href='*' className='btn'> Devamını Gör </a>
          </div>
          <div className='image'>
            <img src='images/bakedBoxImage1.jpg' />
          </div>
        </div>
      </div>

      <div className='slide-container'>
        <div className='slide'>
          <div className='content'>
            <h3>Çiğ Ürünler</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram</p>
            <a href='*' className='btn'> Devamını Gör </a>
          </div>
          <div className='image'>
            <img src='images/bakedBoxImage2.jpg' />
          </div>
        </div>
      </div>

      <div className='slide-container'>
        <div className='slide'>
          <div className='content'>
            <h3>Mezeler</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram</p>
            <a href='*' className='btn'> Devamını Gör </a>
          </div>
          <div className='image'>
            <img src='images/bakedBoxImage3.jpg' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Products;