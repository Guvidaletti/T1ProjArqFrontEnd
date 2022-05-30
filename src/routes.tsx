import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';

export default function Routes() {
  return (
    <React.Fragment>
      <ReactRouterRoutes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </ReactRouterRoutes>
    </React.Fragment>
  );
}
