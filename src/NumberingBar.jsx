import React from "react";
import { Link } from 'react-router-dom';
import '../src/css/NumberingBar.css'; 

function NumberingBar({ onPageChange }) {

  const handlePageClick = (fun) => {
    const pageNumber = parseInt(fun.target.innerText, 10);
    
    onPageChange(pageNumber);
  };

  return (
    <nav className="NumberingBar">
      <ul className="NumberingBar-list">
        <li className="NumberingBar-item">
          <Link to="/home" className="nav-link" onClick={handlePageClick}>1</Link>
        </li>
        <li className="NumberingBar-item">
          <Link to="/home" className="nav-link" onClick={handlePageClick}>2</Link>
        </li>
        <li className="NumberingBar-item">
          <Link to="/home" className="nav-link" onClick={handlePageClick}>3</Link>
        </li>
        <li className="NumberingBar-item">
          <Link to="/home" className="nav-link" onClick={handlePageClick}>4</Link>
        </li>
        <li className="NumberingBar-item">
          <Link to="/home" className="nav-link" onClick={handlePageClick}>5</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NumberingBar;
