import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Footer from './components/Footer';
import './App.css';

import Header2 from './components/header';

function App() {
  return (
    <Router>
      <div>
        <Header2 />

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
