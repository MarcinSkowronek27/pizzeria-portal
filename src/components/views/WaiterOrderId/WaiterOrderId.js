import React from 'react';
import styles from './WaiterOrderId.scss';
import { useParams } from 'react-router';

const WaiterOrderId = () => {
  let { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>
        WaiterOrderId view
      </h2>
      <span>Order Id: {id}</span>
    </div>
  );
};

export default WaiterOrderId;
