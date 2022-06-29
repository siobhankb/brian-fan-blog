import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function EditForm(props) {
    let params = useParams();
    let navigate = useNavigate();

    const handleSubmit = () => {}

  return (
      <>
          <h2>Edit me!</h2>
          <form className='form-control' >
              <label>Edit Post Title</label>
              <input type='text' placeholder={props?.title} />
          </form>
      {/* <div>
        <form className="form-control">
          <div className="mb-3">
            <label for="title" className="form-label">
              Edit Post Title
            </label>
            <input
              type="email"
              className="form-control"
              name="title"
              placeholder={props.post.title}
            />
          </div>
          <div className="mb-3">
            <label for="body" className="form-label">
              Edit Body
            </label>
            <textarea
              className="form-control"
              name="exampleFormbodyControlTextarea1"
              rows="3"
              //   placeholder={post.content}
            ></textarea>
          </div>
          <div className="mb-3">
            <Link
              type="submit"
              class="btn btn-primary mb-3"
              onClick={handleSubmit}
            >
              Update
            </Link>
          </div>
        </form>
      </div> */}
    </>
  );
}
