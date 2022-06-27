import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="container">
        <form>
          <div className="row mt-3 g-3">
            <div className="row mb-3">
              <label for="inputEmail" clasName="col-2 col-form-label">
                Email
              </label>
              <div className="col-6">
                <input type="email" className="form-control" id="inputEmail" />
              </div>
            </div>
            <div className="row">
              <label for="inputPassword" clasName="col-2 col-form-label">
                Password
              </label>
              <div className="col-6">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="row">
              <div clasName="col-2 col-form-label">
                <button type="submit" className="btn btn-primary my-3">
                  Log In
                </button>
              </div>
              <div clasName="col-2 col-form-label">
                <span>No account yet? </span>
                <Link to="/signup">
                  <strong>Sign Up!</strong>
                </Link>
              </div>
            </div>
            <div className="col-sm"></div>
          </div>
        </form>
      </div>
    </>
  );
}