import React from 'react';
import styles from './WaiterOrderId.scss';

const WaiterOrderId = () => (
  <div className={styles.component}>
    <h2>
      WaiterOrderId view
    </h2>
    <div>
      {this.props.match.params.id}
      habababa
    </div>
  </div>
);

export default WaiterOrderId;
