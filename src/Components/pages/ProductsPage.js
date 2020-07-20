import React, { Component } from 'react'
import axios from 'axios';
import { Switch, Route, NavLink } from 'react-router-dom'
import ProductsList from '../productsList/ProductsList';
import css from './ProductsPage.module.css';
import cart from '../../data'


class ProductsPage extends Component {
    state = {
        productsList: []
    }

    transformData = (response) => {
        const data = [];
        const keys = Object.keys(response.data);
        for (const key of keys) {
            data.push({ id: key, ...response.data[key] })
        }
        this.state.productsList = [...data];
    }

    getData = async () => {
        try {
            const response = await axios.get(`https://bc22-72ac2.firebaseio.com/shop/products.json`);
            this.transformData(response)
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        await this.getData();
        this.props.history.push({
            pathname: '/products/all'
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    addToCart = (e) => {

        const id = e.target.dataset.id;
        const product = this.state.productsList.find(product => product.id === id)
        console.log(product);
        cart.cartItems = [...cart.cartItems, product]

    }

    render() {
        return (

            <div className={css.productPage}>
                <ul className={css.productsPageLinks}>
                    <li className={css.productsPageLinksItem}>
                        <NavLink className={css.link} activeClassName={css.activeLink} to="/products/all">All</NavLink>
                    </li>
                    <li className={css.productsPageLinksItem}>
                        <NavLink className={css.link} activeClassName={css.activeLink} to="/products/toys">Toys</NavLink>
                    </li>
                    <li className={css.productsPageLinksItem}>
                        <NavLink className={css.link} activeClassName={css.activeLink} to="/products/tools">Tools</NavLink>
                    </li>
                </ul>


                <div className={css.content}>
                    <Switch>
                        <Route
                            path="/products/all"
                            render={() => <ProductsList products={this.state.productsList} addToCart={this.addToCart} />} />
                        <Route
                            path="/products/toys"
                            render={() => <ProductsList products={this.state.productsList.filter(product => product.category === "toys")} addToCart={this.addToCart} />} />
                        <Route
                            path="/products/tools"
                            render={() => <ProductsList products={this.state.productsList.filter(product => product.category === "tools")} addToCart={this.addToCart}/>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default ProductsPage;