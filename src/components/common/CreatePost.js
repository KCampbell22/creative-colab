import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreatePost.css";
import { useState } from "react";

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(2);

  const handleInput = (event) => {
    if (event.target.scrollHeight > event.target.clientHeight) {
      // add a row until the row equals 10
      if (rows < 10) {
        setRows(rows + 1);
      }
    }
  };

  return (
    <div className="row w-75 ms-2 mb-3">
      <div className="col-12">
        <form className="form w-100 d-flex justify-content-around align-items-center flex-column">
          <div className="form-group d-flex align-items-center w-75 ">
            <div className="form-group w-100">
              <textarea
                className="form-control post-textarea"
                id="postContent"
                rows={rows}
                onInput={handleInput}
                placeholder="What's on your mind?"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>
          <div className="form-group d-flex w-75 align-items-center justify-content-around">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="collaborativeCheckbox"
              />
              Collaborative Post
            </label>

            <div className="form-group mx-3">
              <label>
                Category
                <select className="form-control" id="categorySelect">
                  <option>Fiction</option>
                  <option>Poetry</option>
                  <option>Non-Fiction</option>
                  <option>Screenplay</option>
                  <option>Others</option>
                </select>
              </label>
            </div>
          </div>
          <div
            className="form-group d-flex align-items-center w-50"
            id="submit-post"
          >
            <button type="submit" className="btn btn-primary post-btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
