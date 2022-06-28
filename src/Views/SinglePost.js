import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleCard from '../Components/SingleCard';

// - ['GET'] /blog/posts/<post_id>

export default function SinglePost() {
  const [post, setPost] = useState({});
  
  let params = useParams();
  console.log('params are:', params);
  console.log("params.postId=", params.postId);
  console.log(
    "fetching from endpoint: ",
    `https://kekambas-blog.herokuapp.com/blog/posts/${params.postId}`
  );

  useEffect(() => {
    fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${params.postId}`, {
      method: "GET",
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  console.log("fetched post:", post);
  
  return (
    <>
        <h1>this is a single post</h1>
          <SingleCard post={post} />
    </>
  );
}
