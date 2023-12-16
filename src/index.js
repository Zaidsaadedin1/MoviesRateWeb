import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './mainNavigation'; 
import Home from './Home';
import About from './About';
import Favorites from './Favorites';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </div>
    </Router>   
  );    
};

ReactDOM.render(<App />, document.getElementById('root'));
