import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// https://kekambas-blog.herokuapp.com/

// Here are the endpoints:
// - ['POST'] /auth/users <-- create NEW USER
// - ['GET'] /auth/me *Token Auth Required <--login
// - ['PUT'] /auth/users/<user_id> *Token Auth Required <--EDIT user info
// - ['DELETE'] /auth/users/<user_id> *Token Auth Required <--delete user
// - ['POST'] /auth/token  *Basic Auth Required <--

// - ['POST'] /blog/posts <-- create a NEW post
// - ['GET'] /blog/posts <-- display ALL posts (available to anyone)
// - ['GET'] /blog/posts/<post_id> <--display SINGLE post (available to anyone)
// - ['PUT'] /blog/posts/<post_id> *Token Auth Required <-- edit existing post
// - ['DELETE'] /blog/posts/<post_id> *Token Auth Required <-- delete post