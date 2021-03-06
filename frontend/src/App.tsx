import React, { useState, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './scss/admin.scss';
import store from './store/config.store';
import Router from './router';


function App() { 
  return (
  
    <Provider store={store}>
      <BrowserRouter>
        <Router />

      </BrowserRouter>
    </Provider>

  
);
}

export default App;