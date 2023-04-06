import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => { //option 3... will use frequently 
    // const cart = props.cart; //option one.
    // console.log(cart)
    // const {cart} = props; //option two.
    // console.log(cart);


    let total = 0;
    let totalShipping = 0;
    let totalTax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalTax = total * 7 / 100;
        grandTotal = total + totalTax;
        quantity = quantity + product.quantity;
    }
    return (
        <div>
            <div className='order-details'>
                <h2>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: {totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;