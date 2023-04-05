import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, seller, ratings, price, category, img, id } = props.product;
    const handler = props.handler;


    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="image is not found" />
                <h6 className='product-name'>{name}</h6>
                <h6>Manufacturer: {seller}</h6>
                <h6>Price: ${price}</h6>
                <h6>Ratings: {ratings} stars</h6>
            </div>
            <button onClick={() => handler(id)} className='cart-btn'>Add to cart</button>
        </div>

    );
};

export default Product;