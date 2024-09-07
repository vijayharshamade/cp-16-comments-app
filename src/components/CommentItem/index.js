import "./index.css";
import { formatDistanceToNow } from "date-fns";

import React from "react";

const CommentItem = ({ commentDetails, toggleIsLiked, deleteComment }) => {
  // const { commentDetails } = props;
  //console.log(commentList);
  const { id, name, comment, date, isLiked, initialClassName } = commentDetails;

  const initial = name ? name[0].toUpperCase() : "";

  const postedTime = formatDistanceToNow(date);

  const likeButtonImage = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

  const likeTextClassName = isLiked ? "liked-text" : "like-text";

  const togggleLike = () => {
    toggleIsLiked(id);
  };

  const onDelete = () => {
    deleteComment(id);
  };
  return (
    <>
      <div className="comment-item">
        <div className="comment-container">
          <div className={`initial-container ${initialClassName}`}>
            <p className="initial">{initial}</p>
          </div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
        <div className="buttons-container">
          <button className="like-button" onClick={togggleLike}>
            <img src={likeButtonImage} alt="" className="like-button-img" />
          </button>
          <p className={likeTextClassName}>Like</p>
          <button className="delete-button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-button-img"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentItem;
