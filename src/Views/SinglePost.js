import React, { useState, useEffect } from 'react'
import { useParams, Link, Outlet} from 'react-router-dom'


export default function SinglePost(props) {
  const { postId } = useParams();
  console.log(postId);

  const [post, setPost] = useState({});

  // https://kekambas-blog.herokuapp.com/
  // - ['GET'] /blog/posts/<post_id> <--display SINGLE post (no auth)
  const getPost = useEffect(() => {
    fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  // - ['DELETE'] /blog/posts/<post_id> *Token Auth Required <-- delete post
  const deletePost = () => {
    
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`, {
      method: "DELETE",
      headers: myHeaders,
    }).then((res) => {
      if (res.ok) {
        props.flashAlert("The post has been delete", "danger");
      } else {
        props.flashAlert("You cannot delete this post", "danger");
      }
    });
  };

  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post?.author?.username}
          </h6>
          <p className="card-text">{post?.content}</p>
          <p>
            <Link to="/" className="card-link text-muted">
              {`<-Back`}
            </Link>
            <Link to="edit" className="card-link">
              Edit
            </Link>
            <Link to="/" className="card-link text-danger">
              Delete
            </Link>
          </p>
        </div>
        <Outlet />
      </div>
    </>
  );
}
