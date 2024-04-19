import React from 'react'
import "../styles/BakedProductsStyless.css"
import 'font-awesome/css/font-awesome.min.css';
import { GrClose } from "react-icons/gr";



function BakedProducts() {

    return (
        <>
            <div className='baked-container'>
                <h3 className='baked-title'> Pişmiş Ürünler </h3>
                <div className='products-container'>
                    <div className='product' data-name="p-1">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-2">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-3">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-4">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-5">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-6">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-7">
                        <img src='images/bakedProducts/KanatSis.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>
                </div>
            </div>

            <div className='products-preview'>
                <div className='preview' data-target="p-1">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-2">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-3">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-4">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-5">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-6">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className='preview' data-target="p-7">
                    <GrClose className='close-icon' />
                    <img src='images/bakedProducts/KanatSis.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>
            </div>
        </>
    )
}

export default BakedProducts



