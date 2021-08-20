import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import Dashboard from './components/views/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesBookingId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesBookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesEventsId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={TablesEventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={WaiterOrderId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={WaiterOrderNew} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
