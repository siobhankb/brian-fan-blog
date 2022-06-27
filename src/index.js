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

// Here are the endpoints:
// - ['POST'] /auth/users
// - ['GET'] /auth/me *Token Auth Required
// - ['PUT'] /auth/users/<user_id> *Token Auth Required
// - ['DELETE'] /auth/users/<user_id> *Token Auth Required
// - ['POST'] /auth/token  *Basic Auth Required

// - ['POST'] /blog/posts
// - ['GET'] /blog/posts
// - ['GET'] /blog/posts/<post_id>
// - ['PUT'] /blog/posts/<post_id> *Token Auth Required
// - ['DELETE'] /blog/posts/<post_id> *Token Auth Required