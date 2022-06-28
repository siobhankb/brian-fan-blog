import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// https://kekambas-blog.herokuapp.com/
// - ['POST'] /auth/users
export default function Signup(props) {

  let navigate = useNavigate();

    const handleSignUp = (e) => {
      e.preventDefault();

      let username = e.target.username.value;
      let password = e.target.password.value;
      let confirmPass = e.target.confirmPassword.value;
      if (password !== confirmPass) {
        props.flashMessage("Passwords do not match - try again", 'warning');
      } else {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({
          username: e.target.username.value,
          password: password,
          displayName: e.target.displayName.value
        })

        fetch("https://kekambas-blog.herokuapp.com/auth/users", {
          method: "POST",
          headers: myHeaders,
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            props.flashMessage(
              `Welcome, ${data.displayName}, you're all signed up!`
            );
            navigate("login");
          });
      }
    };
  
  return (
    <>
      <form>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username
          </label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="username" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="password" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="confirmPassword" className="col-sm-3 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3 offset-8">
            <Link
              type="submit"
              className="form-control btn btn-primary"
              onClick={handleSignUp}
            >
              Sign Up!
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
