import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const [cart, setCart] = useState([]);

    const savedCart = [];

    useEffect(() => {
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        };
        setCart(savedCart);
    }, [products])

    const handler = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !==product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handler={handler}
                    ></Product>)
                }
            </div>
            <div className="order-summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;