// LandPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';

function LandPage() {
  const handleClick = () => {
    console.log('go to Login Page!');
  };

  return (
    <div>
      {/* <Cards /> */}
      <Link to='/LoginPage'>
        <Button variant="dark" onClick={handleClick}>Login</Button>
      </Link>
    </div>
  );
}

export default LandPage;
