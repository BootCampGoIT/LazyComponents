import React from 'react';
import css from './ProductsList.module.css'
import ProductsListItem from './ProductsListItem/ProductsListItem';

const ProductsList = ({ products, addToCart }) => {
    return (
        <ul className={css.productsList}>
            {products.map(product => <ProductsListItem product={product} key={product.id} addToCart={addToCart} />)}
        </ul>
    );
}

export default ProductsList;