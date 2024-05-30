import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ShoppingHome from './ShoppingHome'
import NotFound from './NotFound'
import ShoppingProducts from './ShoppingProducts'

function ShoppingIndex() {
    return (
        <div>
            <BrowserRouter>
                <header className='d-flex justify-content-between p-2 bg-dark text-white mt-2'>
                    <div><h2>FakeStore</h2></div>
                    <div>
                        <span className='me-4'><Link to="home" className='text-white text-decoration-none'>Home</Link> </span>
                        <span className='me-4'>Electronic</span>
                        <span className='me-4'>Jewelery</span>
                        <span className='me-4'>Men's Fashion</span>
                        <span className='me-4'>Women's Fashion</span>
                    </div>
                    <div>
                        <span className='bi bi-search me-3'></span>
                        <span className='bi bi-heart me-3'></span>
                        <span className='bi bi-person me-3'></span>
                        <span className='bi bi-cart me-3'></span>


                    </div>
                </header>
                <section className='mt-4 row'>
                    <Routes>
                        <Route path='/' element={<ShoppingHome />} />
                        <Route path='home' element={<ShoppingHome />} />
                        <Route path='products/:catName' element={<ShoppingProducts />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}

export default ShoppingIndex
