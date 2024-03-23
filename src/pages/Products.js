import React from 'react'
import "../styles/ProductsStyless.css"

function Products() {

  const step1 = 1
  const step2 = 2
  const step3 = 3

  const step = step1;


  return (
    <>
      <div className='products-container'>
          <ul className="arrow-container">
            <li className="prev"><span></span></li>
            <li className="next"><span></span></li>
          </ul>

        <div className="baked-products">
          <div className="products-line1"></div>
          <div className="baked-box1">
            <img src="*" alt="baked-box-image1" />
          </div>
          <div className="baked-box2">
            <img src="*" alt="baked-box-image2" />
          </div>
          <div className="baked-box3">
            <img src="*" alt="baked-box-image3" />
          </div>
          <div className="products-line2"></div>
        </div>

      </div>
    </>

  )
}

export default Products;