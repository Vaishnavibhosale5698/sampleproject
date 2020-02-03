import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default app;