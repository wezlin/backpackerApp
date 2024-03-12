import React from 'react';
import { Link } from 'react-router-dom';
import LoginPageComponent from './LoginPageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function LoginPage() {

    const handleBacktoLandPage = ()=> {
        console.log("back to LandPage!")
    }
  return (
    <div>
        <Link to='/'>
            <Button variant="dark" onClick={handleBacktoLandPage}>Back to Land Page</Button>
        </Link>
        <LoginPageComponent/>
    </div>
  );
}

export default LoginPage;
