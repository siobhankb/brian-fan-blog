import React from 'react'

export default function BaseCard({ post }) {
  return (
    <>
      <h4 className="text-danger">Sample Blog Home Card</h4>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h5 className="card-title text-muted">By: {post.author.username}</h5>
          <h6 className="card-body">{post.content}</h6>
        </div>
      </div>
    </>
  );
}
