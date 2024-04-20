import React, { useState } from 'react';
import "../styles/BakedProductsStyless.css"
import 'font-awesome/css/font-awesome.min.css';
import { GrClose } from "react-icons/gr";



function AppetizerProducts() {

    const [activePreview, setActivePreview] = useState(null);

    const showPreview = (productName) => {
        setActivePreview(productName);
    };

    const closePreview = () => {
        setActivePreview(null);
    };

    return (
        <>

            <div className='baked-container'>
                <h3 className='baked-title'> Mezeler </h3>
                <div className='products-container'>
                    <div className='product' data-name="p-1" onClick={() => showPreview('p-1')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Piliç But</h3>
                    </div>

                    <div className='product' data-name="p-2" onClick={() => showPreview('p-2')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-3" onClick={() => showPreview('p-3')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-4" onClick={() => showPreview('p-4')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-5" onClick={() => showPreview('p-5')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-6" onClick={() => showPreview('p-6')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>

                    <div className='product' data-name="p-7" onClick={() => showPreview('p-7')}>
                        <img src='images/appetizerProducts/p1.jpg' />
                        <h3>Örnek Ürün</h3>
                    </div>
                </div>
            </div>

            <div className='products-preview' style={{ display: activePreview ? 'flex' : 'none' }}>
                <div className={`preview ${activePreview === 'p-1' ? 'active' : ''}`} data-target="p-1">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-2' ? 'active' : ''}`} data-target="p-2">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-3' ? 'active' : ''}`} data-target="p-3">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-4' ? 'active' : ''}`} data-target="p-4">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-5' ? 'active' : ''}`} data-target="p-5">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-6' ? 'active' : ''}`} data-target="p-6">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>

                <div className={`preview ${activePreview === 'p-7' ? 'active' : ''}`} data-target="p-7">
                    <GrClose className='close-icon' onClick={closePreview} />
                    <img src='images/appetizerProducts/p1.jpg' />
                    <h3>Örnek Ürün</h3>
                    <p>Örnek ürünümüz özenle hazırlanır ve en taze pişmiş şekliyle sizlere sunulur.</p>
                </div>
            </div>
        </>
    )
}

export default AppetizerProducts
