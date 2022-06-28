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
    console.log('I clicked!')
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let myToken = localStorage.getItem("token");
    console.log('I tried to get a token:', myToken)
    myHeaders.append("Authorization", `Bearer ${myToken}`);

    let postTitle = e.target.title.value;
    console.log("target title= ", postTitle);
    let postBody = e.target.body.value;
    console.log("target body= ", postBody);

    let data = JSON.stringify({ postTitle, postBody });
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
            <input
              type="title"
              className="form-control"
              id="title"
              placeholder="Title of Post"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="body"
              rows="3"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="row">
            <div className="col col-4">
              <button
                type="submit"
                className="form-control tn btn-primary my-3"
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      </>
    );
}
