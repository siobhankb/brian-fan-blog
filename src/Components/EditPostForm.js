import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// https://kekambas-blog.herokuapp.com/
// - ['GET'] /blog/posts/<post_id>
// - ['PUT'] /blog/posts/<post_id> *Token Auth Required
// - ['DELETE'] /blog/posts/<post_id> *Token Auth Required

export default function EditPostForm(props) {
let navigate = useNavigate();

useEffect(() => {
  if (!props.loggedIn) {
    props.flashMessage("You must be logged in to edit a post", "danger");
    navigate("/login");
  }
}, [props.loggedIn]);
    
    useEffect(() => {
      if (!props.loggedIn) {
        props.flashMessage("You must be logged in to edit a post", "danger");
        navigate("/login");
      }
    }, [props.loggedIn]);

const handleSubmit = (e) => {
  e.preventDefault();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let myToken = localStorage.getItem("token");
  myHeaders.append("Authorization", `Bearer ${myToken}`);

  let title = e.target.title.value;
  let body = e.target.body.value;

  let data = JSON.stringify({ title, body });

  fetch("/blog/posts/<post_id>", {
    method: "PUT",
    headers: myHeaders,
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        props.flashMessage(
          `The post ${data.title} could not be found`,
          "warning"
        );
      } else {
        props.flashMessage(
          `The post ${data.title} has been created`,
          "success"
        );
        navigate("/");
      }
    });
};

  return (
    <>
      <div>
        <form className="form-control">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Edit Post Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            //   placeholder={post.title}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Edit Body
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            //   placeholder={post.content}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
