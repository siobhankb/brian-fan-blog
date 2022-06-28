import React from "react";
import { Link } from "react-router-dom";

export default function SingleCard({ post }) {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post.author.username}
          </h6>
          <p className="card-text">{post.content}</p>
          <Link to="/" className="card-link text-muted">
            Back
          </Link>
          <Link to="edit" className="card-link">
            Edit
          </Link>
          <Link to="/" className="card-link fs-sm text-danger">
            Delete
          </Link>
        </div>
      </div>
    </>
  );
}
