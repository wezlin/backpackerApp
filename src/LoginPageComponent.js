import React from 'react';


function LoginPageComponent(){
  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

    return (
        <>
             <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="#">Forgot Password?</a>
      </div>
      <div>
        <h3>Or Login with:</h3>
        <button onClick={handleGoogleLogin}>Google</button>
        <button onClick={handleFacebookLogin}>Facebook</button>
      </div>
        
        </>
    )
}



export default LoginPageComponent;