import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-warning" to="/">
            We Stan Brian Stan<span className='text-muted'>ton</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {props.loggedIn ? (
                <>
                  <Link className="nav-link" to="/create-post">
                    Create a Post
                  </Link>
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => props.logUserOut()}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
