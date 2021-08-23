import React from 'react';
import styles from './TablesEventsId.scss';
import { useParams } from 'react-router-dom';

const TablesEventsId = () => {
  let { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>
        TablesEventsId view
      </h2>
      <span>Event Id: {id}</span>
    </div>
  );
};

export default TablesEventsId;
