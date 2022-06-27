import React from 'react'

export default function CreatePost() {
    return (
      <>
        <h6>this is where you will create a post</h6>
        <div className="container">
          <div className="mb-3">
            <label for="FormControlTitle" className="form-label">
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
            <label for="FormControlTextarea1" className="form-label">
              What's on your mind?
            </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" class="btn btn-primary mb-3">
              Publish
            </button>
          </div>
        </div>
      </>
    );
}
