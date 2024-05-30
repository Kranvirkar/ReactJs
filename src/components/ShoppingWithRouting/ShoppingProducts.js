import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ShoppingProducts() {
    const params = useParams();
    const PRODUCTS_URL = `https://fakestoreapi.com/products/category/${params.catName}`
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleProducts = async () => {
            try {
                const data = await fetch(PRODUCTS_URL)
                const res = await data.json();
                setProducts(res)
            } catch (error) {
                console.log('Error occured while fetching category ' + error)
            }
        }
        handleProducts()
    }, [])

    return (
        <div className='container-fluids'>
            <h2>{params.catName} Products</h2>
            <div className=' d-flex flex-wrap'>
                {
                    products.map((product) => {
                        return <div key={product.id} className='card m-2 p-2' style={{ width: '18rem' }}>
                            <img src={product.image} height="150" className='card-img-top' />
                            <div className='card-header'>
                                <p className='card-title'>{product.title}</p>
                            </div>
                            <div className='card-body'>
                                <dl>
                                    <dt>price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd><span className='bi bi-star-fill text-success'></span> {product.rating.rate}[{product.rating.count}]</dd>

                                </dl>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger w-100'><span className='bi bi-cart4'></span>Add to cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <p><Link to="/home">Back To Home</Link></p>
            </div>
        </div>
    )
}

export default ShoppingProducts
