import React from 'react';
import { RouteHandler } from 'react-router';
import CategoryLinks from './CategoryLinks/CategoryLinks';
import Cart from './Cart/Cart';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <CategoryLinks />
            <RouteHandler />
          </div>

          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
})
