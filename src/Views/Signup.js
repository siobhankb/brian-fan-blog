import React from 'react'

export default function Signup() {
  return (
    <>
      <div className="container">
        <form>
          <div className="row mb-3">
            <label for="inputEmail" className="col-sm-3 col-form-label">
              Email
            </label>
            <div className="col-sm-8">
              <input type="email" className="form-control" id="inputEmail" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="confirmPassword" className="col-sm-3 col-form-label">
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
          <div className="row mb-3">
            <label for="displayName" className="col-sm-3 col-form-label">
              Display Name
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="displayName" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 offset-8">
              <button type="submit" className="form-control btn btn-primary">
                Sign Up!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
