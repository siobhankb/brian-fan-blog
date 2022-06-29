import React from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function Login(props) {

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    // give me control over defaul button click settings
    e.preventDefault();

    // get form info
    let username = e.target.username.value;
    let password = e.target.password.value;

    //set up request for auth token
    // encode password btoa = "binary to ascii"
    let encodePass = btoa(`${username}:${password}`);

    //set up headers for fetch request 
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${encodePass}`);

    //fetch from API
    fetch("https://kekambas-blog.herokuapp.com/auth/token", {
      method: "POST",
      headers: myHeaders,
    }).then(res => {
      if (res.ok) {
        console.log('req/res = ok')
        return res.json()
      } else {
        props.flashAlert('Incorrect username/password', 'danger')
      }
    }).then(data => {
      if (data) {
      //store auth token locally; remembers it until cleared or session ends
      // can I use it to find out who the current user is?
      console.log('data=', data)
      localStorage.setItem('token', data?.token)
      props.flashAlert('You have successfully logged in', 'success')
      props.logUserIn();
        navigate('/')
      } else {
        props.flashAlert('there was a problem...', 'warning')
      }
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-2 offset-2">
              <input
                type="submit"
                className="btn btn-primary w-20"
                value="Login"
              />
            </div>
            <div className="col-2 text-end">
              <h6>No account yet? </h6>
            </div>
            <div className="col-2">
              <Link to="/signup">
                <h6>Sign Up!</h6>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
