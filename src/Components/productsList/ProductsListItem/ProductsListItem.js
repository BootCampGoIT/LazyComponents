import React from 'react';
import css from './ProductsListItem.module.css';
import cart from '../../../assets/cart.png';

const ProductsListItem = ({ product, addToCart }) => {
    return (
        <li className={css.productsListItem}>
            <h2>{product.productName}</h2>
            <img className={css.productImage} src={product.productImage} alt={product.productName} />
            <div className={css.order}>
                <p className={css.productPrice}>{product.productPrice}$</p>
                <div className={css.orderCartBlock}>
                    <img src={cart} alt="cartImage" className={css.orderCartBlockImage} data-id={product.id} onClick={addToCart} />
                </div>


            </div>


        </li>
    );
}

export default ProductsListItem;