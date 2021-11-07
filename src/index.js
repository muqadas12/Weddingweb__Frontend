import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import App from './App';
import store from './ReduxApi/store.js';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      {/* <Router>
      <App />
    </Router> */}
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
