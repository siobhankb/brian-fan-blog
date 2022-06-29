import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Alert from "./Components/Alert";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import CreatePost from "./Views/CreatePost";
import SinglePost from "./Views/SinglePost";
import EditForm from "./Components/EditForm";
import Modal from "./Components/Modal";

function App() {
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [modal, showModal] = useState(false)

  const flashAlert = (aMessage, aCategory) => {
    setMessage(aMessage);
    setCategory(aCategory);
  };

  const logUserIn = () => setLoggedIn(true);
  const logUserOut = () => {
    flashAlert("You have successfully logged out", "warning");
    setLoggedIn(false);
    localStorage.removeItem('token')
  };

  return (
    <>
      <div className="App"></div>
      <Nav
        brand="We Stan Brian Stan-ton"
        flashAlert={flashAlert}
        loggedIn={loggedIn}
        logUserOut={logUserOut}
        onClick={logUserOut}
      />
      {message ? (
        <Alert message={message} category={category} flashAlert={flashAlert} />
      ) : null}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home flashAlert={flashAlert} />} />
          <Route
            path="login"
            element={<Login logUserIn={logUserIn} flashAlert={flashAlert} />}
          />
          <Route
            path="signup"
            element={
              <Signup
                logUserIn={logUserIn}
                flashAlert={flashAlert}
                message={message}
                category={category}
              />
            }
          />
          <Route
            path="create-post"
            element={
              <CreatePost logUserIn={logUserIn} flashAlert={flashAlert} />
            }
          />
          <Route
            path="posts/:postId"
            element={<SinglePost flashAlert={flashAlert} />}>
            <Route path='edit' element={<EditForm />}/>
            </Route>
        </Routes>
        <Outlet />
      </div>
    </>
  );
}

export default App;
