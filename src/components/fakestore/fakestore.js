import React, { useEffect, useState } from 'react'

function Fakestore() {

    const CATEGORY_URL = 'https://fakestoreapi.com/products/categories';
    const PRODUCTS_URL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        const handleCategories = async () => {
            try {
                const data = await fetch(CATEGORY_URL)
                const res = await data.json();
                res.unshift("all")
                setCategories(res)
            } catch (error) {
                console.log('Error occured while fetching category ' + error)
            }
        }

        const handleProducts = async () => {
            try {
                const data = await fetch(PRODUCTS_URL)
                const res = await data.json();
                setProducts(res)
            } catch (error) {
                console.log('Error occured while fetching category ' + error)
            }
        }
        handleCategories()
        handleProducts()
    }, [])

    function handleCategoriesChange(event) {
        let filter = event.target.value;
        if (filter === 'all') {
            setFilterProduct(products);
        } else if (filter === 'electronics') {
            setFilterProduct(products.filter((product) => product.category === 'electronics'))
        } else if (filter === 'jewelery') {
            setFilterProduct(products.filter((product) => product.category === 'jewelery'))
        } else if (filter === "men's clothing") {
            setFilterProduct(products.filter((product) => product.category === "men's clothing"))
        } else if (filter === "women's clothing") {
            setFilterProduct(products.filter((product) => product.category === "women's clothing"))
        }

    }


    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);



    return (
        <div className='container-fluid'>
            <header className='d-flex justify-content-between p-2 bg-dark text-white mt-2'>
                <div><h2>FakeStore</h2></div>
                <div>
                    <span className='me-4'>Home</span>
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
                <nav className='col-2'>
                    <div>
                        <label className='form-label'>Select Category</label>
                        <div>
                            <select className='form-select' onChange={handleCategoriesChange}>
                                {
                                    categories.map((category) => {
                                        return <option key={category} value={category} >{category.toUpperCase()}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className='col-10 d-flex flex-wrap'>
                    {
                        filterProduct.map((product) => {
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
                </main>
            </section>

        </div>
    )
}

export default Fakestore
