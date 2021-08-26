import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => {

  return (
    <div className={styles.component}>
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table
      </Button>
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'> Edit Table
      </Button>
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> New Event
      </Button>
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'> Edit Event
      </Button>
      <h2>
        Tables view
      </h2>
    </div>
  );
};

export default Tables;
