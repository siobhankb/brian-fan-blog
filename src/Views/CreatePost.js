import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


export default function CreatePost(props) {

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!props.loggedIn) {
  //     props.flashMessage('You must be logged in to create a post', 'danger')
  //     navigate('/login')
  //   }
  // }, [props.loggedIn])

  const handleSubmit = (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let myToken = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${myToken}`);

    let title = e.target.title.value;
    let body = e.target.body.value;

    let data = JSON.stringify({ title, body });
    // - ['POST'] /auth/token  *Basic Auth Required
    fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
      method: "POST",
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
        <h6>this is where you will create a post</h6>
        <form className="form-control">
          <div className="mb-3">
            <label htmlFor="FormControlTitle" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="FormControlTitle"
              placeholder="Title of Post"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="FormControlTextarea1" className="form-label">
              What's on your mind?
            </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <Link type="submit" class="btn btn-primary mb-3" onClick={handleSubmit} >
              Publish
            </Link>
          </div>
        </form>
      </>
    );
}
