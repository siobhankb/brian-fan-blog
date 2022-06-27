import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Views/Home';
import Login from './Views/Login';
import Signup from './Views/Signup';
import CreatePost from './Views/CreatePost';
import SinglePost from './Views/SinglePost';


function App(props) {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="post/post: id" element={<SinglePost />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
