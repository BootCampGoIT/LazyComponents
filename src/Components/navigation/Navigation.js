import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <ul className={css.navigationList}>
                <li className={css.navigationListItem}><NavLink className={css.link} activeClassName={css.activeLink} to='/products'>Products</NavLink></li>
                <li className={css.navigationListItem}><NavLink className={css.link} activeClassName={css.activeLink} to='/profile'>Profile</NavLink></li>
                <li className={css.navigationListItem}><NavLink className={css.link} activeClassName={css.activeLink} to='/cart'>Cart</NavLink></li>
            </ul>
            


        );
    }
}

export default Navigation;