import React from 'react';
import styles from './PageNav.scss';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/Tables`} activeClassName='active'>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/Waiter`} activeClassName='active'>Waiter</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</NavLink>
  </nav>
);

export default PageNav;
