import React from 'react'
import { commerce } from './lib/commerce';
import { useState, useEffect } from 'react';

import {Products, Navbar } from './components';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts()
    }

    const fetchCart = async () => {
        const responce = await commerce.cart.retrieve();

        setCart()
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(products);

    return (
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
    )
}

export default App;