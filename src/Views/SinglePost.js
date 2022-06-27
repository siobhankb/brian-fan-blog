import React from 'react'
import PostCards from '../Components/PostCards';

export default function SinglePost(aPost) {
  return (
    <>
      <div className="container">
        <h4>this is a single post</h4>
          <PostCards aPost={aPost} />
      </div>
    </>
  );
}
