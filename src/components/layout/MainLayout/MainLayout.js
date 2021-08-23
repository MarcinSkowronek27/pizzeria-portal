import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = props => (
  <div>
    <PageNav />
    {props.children}
    {/* skąd on tu bierze dzieci? ASK*/}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
