import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { Data } from "../data";
import "../common/post.css";
import Comment from "./Comment";
import CreatePost from "./CreatePost";

export default function Post() {
  const [postData, setData] = useState({});
  const [postId, setPostId] = useState("");
  const [authorId, setAuthorId] = useState([]);
  const [collaborative, setCollaborative] = useState(false);
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const likeButton = <i className="fa-regular fa-heart"></i>;
  const likeButtonClicked = <i className="fa-duotone fa-heart"></i>;

  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    setData(Data);
    console.log(postData);
  }, []);

  // set

  // on like button click change to <i className="fa-duotone fa-heart"></i>

  const likePost = () => {
    if (userLiked) {
      setLikes(likes - 1);
      setUserLiked(false);
    } else {
      setLikes(likes + 1);
      setUserLiked(true);
    }
  };

  // useeffect to set the comment count

  useEffect(() => {
    setCommentCount(comments.length);
  }, [comments]);

  return (
    <>
      {postData.posts &&
        postData.posts.map((post) => {
          return (
            <div
              key={post.postId}
              className="post-card col-12 d-flex flex-column p-1"
            >
              <div className="post-header d-flex align-items-start">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="user-image"
                />

                <p className="post-author text-left m-1"> {post.authorName}</p>
                <p className="post-date m-1">
                  Date:{" "}
                  {moment(post.postDate).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>

              <div className="post-content text-left">
                <p className="text-left">{post.content}</p>
              </div>

              <div className="post-comment-input input-group me-auto ms-2 w-75 mt-4 mb-3">
                {userLiked ? (
                  <button
                    onClick={likePost}
                    className="like-button btn-outline-dark btn input-group-prepend"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                ) : (
                  <button
                    onClick={likePost}
                    className="like-button btn-outline-dark btn input-group-prepend"
                  >
                    <i className="fa-solid fa-heart"></i>{" "}
                  </button>
                )}

                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="comment-input form-control "
                />
                <button className="comment-button btn-outline-dark btn input-group-append">
                  Comment
                </button>
              </div>
              <div>
                {/* If there are no comments then  */}
                {
                  post.comments.length > 0 && (
                    <div className="post-comments p-3">
                      <p className="comment-count">
                        {post.comments.length} Comments
                      </p>
                      <Comment comments={post.comments} />
                    </div>
                  ) // if there are no comments then have the comment component have
                }
              </div>
            </div>
          );
        })}
    </>
  );
}
