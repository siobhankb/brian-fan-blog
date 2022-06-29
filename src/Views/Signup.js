import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let password = e.target.password.value;
    let confirmPass = e.target.confirmPass.value;
    if (password !== confirmPass){
            props.flashMessage("Whoops! Your passwords didn't match! Try again...", 'danger');
    } else {
      // Set up post request to /auth/users
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let data = JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: password,
      });

      fetch("https://kekambas-blog.herokuapp.com/auth/users", {
        method: "POST",
        headers: myHeaders,
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            props.flashMessage(data.error, "danger");
          } else {
            props.flashMessage(
              `${data.username} has been registered`,
              "success"
            );
            navigate("/");
          }
        });
    }

    }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row mt-3 g-3">
          <div className="row mb-3">
            <label htmlFor="username" className="col-2 col-form-label">
              Username
            </label>
            <div className="col-6">
              <input type="text" className="form-control" id="username" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-6">
              <input type="text" className="form-control" id="password" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="ConfirmPassword" className="col-2 col-form-label">
              Confirm Password
            </label>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="ConfirmPassword"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-3 offset-2">
              <input
                type="submit"
                className="btn btn-success w-25"
                value="Sign Up!"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
