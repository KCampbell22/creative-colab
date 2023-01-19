import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import "./Comment.css";

export default function Comment({ comments, count }) {
  const [replies, setReplies] = useState({});
  const [like, setLike] = useState(0);
  const [commentLikes, setCommentLikes] = useState({});
  const [userLikedComment, setUserLikedComment] = useState({});

  const handleReply = (userId) => {
    setReplies({
      ...replies,
      [userId]: !replies[userId],
    });
  };

  const handleLike = (userId) => {
    if (userLikedComment[userId]) {
      setCommentLikes({
        ...commentLikes,
        [userId]: commentLikes[userId] - 1,
      });
      setUserLikedComment({
        ...userLikedComment,
        [userId]: !userLikedComment[userId],
      });
    } else {
      setCommentLikes({
        ...commentLikes,
        [userId]: commentLikes[userId] ? commentLikes[userId] + 1 : 1,
      });
      setUserLikedComment({
        ...userLikedComment,
        [userId]: !userLikedComment[userId],
      });
    }
  };

  return (
    <div className="">
      <hr></hr>

      {comments.map((comment) => {
        return (
          <>
            <div
              key={comments.userId}
              className="comment border rounded w-80 mt-1 p-2 m-3"
            >
              <div className="row p-1">
                <div className="post-header d-flex align-items-start p-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="user-image"
                  />
                  <div className="d-flex align-items-start">
                    <p className="post-author text-left mb-0">
                      {" "}
                      {comment.userName}
                    </p>
                    <p className="post-date">
                      Date:{" "}
                      {moment(comment.commentsDateTime).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment-content text-left">
                <p className="text-left">{comment.content}</p>
              </div>
              <div className="d-flex justify-content-start mb-2">
                <button
                  href="#"
                  onClick={() => handleReply(comment.userId)}
                  className="text-left me-auto btn btn-outline-dark"
                >
                  Reply
                </button>
                <button
                  onClick={() => handleLike(comment.userId)}
                  className="btn btn-outline-dark"
                >
                  {userLikedComment[comment.userId] ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                  {commentLikes[comment.userId]
                    ? commentLikes[comment.userId]
                    : 0}
                </button>
              </div>

              {replies[comment.userId] ? (
                <div className="post-comment-input input-group w-75 mt-4 mb-3">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input form-control "
                  />
                  <button className="comment-button btn-outline-dark btn input-group-append">
                    Comment
                  </button>
                </div>
              ) : null}
            </div>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
}
