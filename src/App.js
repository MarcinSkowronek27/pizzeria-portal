import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={} /> */}
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
