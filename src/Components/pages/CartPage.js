import React from 'react';
import data from '../../data';

const CartPage = () => {
    return (
        <ul>
            {data.cartItems.map(product => <li key={product.id}>{product.productName}</li>)}
        </ul>
    );
}

export default CartPage;