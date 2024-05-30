import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ShoppingHome = () => {


    const CATEGORY_URL = 'https://fakestoreapi.com/products/categories';


    useEffect(() => {
        const handleCategories = async () => {
            try {
                const data = await fetch(CATEGORY_URL)
                const res = await data.json();
                setCategories(res)
            } catch (error) {
                console.log('Error occured while fetching category ' + error)
            }
        }
        handleCategories()

    }, [])
    const [categories, setCategories] = useState([]);
    return (
        <>
            <div>
                <div>
                    <ol>
                        {
                            categories.map((category) => {
                                return <li key={category} value={category}>
                                    <Link to={`/products/${category}`}>    {category.toUpperCase()}</Link>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>


        </>)
}

export default ShoppingHome
