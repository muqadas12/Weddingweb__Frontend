// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter as Router} from "react-router-dom"
// import thunk from "redux-thunk"
// import { Provider } from 'react-redux';
// import store from "./redux/store"
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//      <Router>
     
//     <App />
  
//     </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import store from "./redux/store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
     
    <App />
  
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);