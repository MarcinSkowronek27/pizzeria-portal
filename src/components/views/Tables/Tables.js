import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => {
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Edit Table
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Edit Event
    </Link>
    <h2>
      Tables view
    </h2>
  </div>;
};

export default Tables;
