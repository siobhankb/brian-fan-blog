import React, { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Nav from './Components/Nav';
import Alert from './Components/Alerts';
import Home from './Views/Home';
import Login from './Views/Login';
import Signup from './Views/Signup';
import CreatePost from './Views/CreatePost';
import SinglePost from './Views/SinglePost';
import EditPostForm from './Components/EditPostForm';


function App(props) {

  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState({});

  const flashMessage = (message, category) => {
    setMessage(message);
    setCategory(category);
  };

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  const getCurrentUser = () => {
    let theUser = props.user;
    setUser(theUser);
  }


  return (
    <>
      <div id="fromApp">
        <Nav
          brand="We Stan Brian"
          loggedIn={loggedIn}
          currentUser={user}
          logout={logout}
          onClick={logout}
        />
        {message ? (<Alert message={message} category={category} flashMessage={flashMessage} />) : null}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path={"posts/:postId"} element={<SinglePost />}>
              <Route path={"edit"} element={<EditPostForm />} />
            </Route>
            <Route
              path="login"
              element={<Login flashMessage={flashMessage} login={login} />}
            />
            <Route
              path="signup"
              element={<Signup flashMessage={flashMessage} />}
            />
            <Route
              path="create-post"
              element={<CreatePost flashMessage={flashMessage} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
