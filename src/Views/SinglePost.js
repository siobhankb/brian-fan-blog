import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleCard from '../Components/SingleCard';

// - ['GET'] /blog/posts/<post_id>

export default function SinglePost() {
  const [post, setPost] = useState({});
  
  let params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${params.postId}`,{
      method: "GET",
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [params.postId]);
  console.log(post);
  
  return (
    <>
        <h1>this is a single post</h1>
          <SingleCard post={post} />
    </>
  );
}
