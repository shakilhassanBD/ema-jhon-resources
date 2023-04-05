import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
            <button onClick={() => handler(props.product)} className='cart-btn'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />

                </button>
        </div>

    );
};

export default Product;