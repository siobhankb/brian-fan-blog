import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {
  let navigate = useNavigate();
  const { loggedIn } = props;
  const { flashAlert } = props;

  useEffect(() => {
    if (!loggedIn) {
      flashAlert("Please LOG IN to create a new post!", "danger");
      navigate("/login");
    }
  }, [loggedIn, flashAlert, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let title = e.target.title.value;
    let content = e.target.content.value;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    let data = JSON.stringify({ title, content });

    // https://kekambas-blog.herokuapp.com/
    // - ['POST'] /blog/posts <-- create a NEW post
    fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
      method: "POST",
      headers: myHeaders,
      body: data,
    }).then(res => res.json()).then(data => {
      if (data.error) {
        flashAlert(data.error, "danger");
      } else {
        flashAlert(`Your post, ${data.title} has been created!`, "success");
        navigate('/')
      }
    });
  }

  return (
    <>
      <h4>Tell why YOU stan B-Stan:</h4>
      <form onSubmit={handleFormSubmit} className="form-control">
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
            id="content"
            rows="3"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="row">
          <div className="col col-4">
            <input
              type="submit"
              className="form-control tn btn-primary my-3"
              value='Publish'
            />
          </div>
        </div>
      </form>
    </>
  );
}
