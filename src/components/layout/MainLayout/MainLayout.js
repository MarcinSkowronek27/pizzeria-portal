import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = props => (
  <div>
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>
    <Toolbar />
    {props.children}
    {/* skąd on tu bierze dzieci? ASK*/}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
