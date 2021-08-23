import React from 'react';
import styles from './TablesBookingId.scss';
import PropTypes from 'prop-types';

const TablesBookingId = props => (
  <div className={styles.component}>
    <h2>
      TablesBookingId view
    </h2>
    <span>Table Id: {props.match.params.id}</span>
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.object,
};
export default TablesBookingId;

// POMOCNE
// są dwie metody, żeby wyciągnąć końcówkę adresu strony, jaką używamy. Pierwsza metoda jest użyta tuaj (TablesBookingId) i polega
// na wyciągnięciu id z propsa.
// Druga metoda znajduje się w komponencie TablesEventsId i używa wbudowanej funkcji w Reacta useParams().
