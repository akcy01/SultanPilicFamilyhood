import React from 'react'
import "../styles/BakedProductsStyless.css"


function BakedProducts() {
  return (
    <>
      <div className='baked-container'>
            <h3 className='baked-title'> Pişmiş Ürünler </h3>

            <div className='products-container'>
                <div className='product' data-name="p-1">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>

                <div className='product' data-name="p-2">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>

                <div className='product' data-name="p-3">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>

                <div className='product' data-name="p-4">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>

                <div className='product' data-name="p-5">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>

                <div className='product' data-name="p-5">
                    <img src='images/bakedProducts/KanatSis.jpg'/>
                    <h3>Örnek Ürün</h3>
                </div>
            </div>
      </div>
    </>
  )
}

export default BakedProducts