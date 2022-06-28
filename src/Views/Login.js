import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// https://kekambas-blog.herokuapp.com/
// - ['GET'] /auth/me *Token Auth Required
export default function Login(props) {

  let navigate = useNavigate();

  // const [currentUser, setCurrentUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    let username = e.target.username.value;
    let password = e.target.password.value;

    let myHeaders = new Headers();
    myHeaders.append(
      'Authorization', 'Basic ' + btoa(`${username}:${password}`)
    );

    let response = await fetch("https://kekambas-blog.herokuapp.com/auth/me", {
      headers: myHeaders,
    });
    let data = await response.json();
    console.log(data);
    // localStorage.setItem('token', data.token);
    // localStorage.setItem('expiration', data.expiration);
    // localStorage.setItem('user', data.username);

    //  props.login();
  
    // //  setCurrentUser(username);

    //  props.flashMessage('You have successfully logged in', 'success');

    //  navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mt-3 g-3">
          <div className="row mb-3">
            <label htmlFor="username" className="col-2 col-form-label">
              Username
            </label>
            <div className="col-6">
              <input type="tex" className="form-control" id="username" />
            </div>
          </div>
          <div className="row">
            <label htmlFor="password" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-6">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-form-label">
              <button type="submit" className="btn btn-primary my-3">
                Log In
              </button>
            </div>
            <div className="col-2 col-form-label">
              <span>No account yet? </span>
              <Link to="/signup">
                <strong>Sign Up!</strong>
              </Link>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </form>
    </>
  );
}