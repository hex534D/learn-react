import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './components/Body';
import Header from './components/Header';

const AppLayoutComponent = () => (
  <div className="container">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);
