import React from 'react';
import styles from './login.modules.scss';
import PropTypes from 'prop-types';

const Login = props => {
  <div className={styles.component}>
    <h2>
      Login view
    </h2>
  </div>;
};

Login.propTypes = {
  children: PropTypes.node,
};

export default Login;
