import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CommentItem from "../CommentItem";

const dummyList = [
  {
    id: uuidv4(),
    name: "vijay",
    comment: "commentInput",
    date: new Date(),
    isLiked: false,
    initialClassName: "amber",
  },
];
const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

const Comments = () => {
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState([]);

  // with useRef you can stop re-renders until add button is clicked
  // const nameRef = useRef("");
  // const commentTextRef = useRef("");
  // const [commentList, setCommentList] = useState([]);
  // console.log(commentList.length);

  const deleteComment = (id) => {
    const FilteredArray = commentList.filter(
      (eachComment) => eachComment.id !== id
    );
    setCommentList(FilteredArray);
  };

  const toggleIsLiked = (id) => {
    setCommentList((prevList) =>
      prevList.map((eachComment) => {
        if (eachComment.id === id) {
          return { ...eachComment, isLiked: !eachComment.isLiked }; // Toggle isLiked
        }
        return eachComment; // Return other comments as they are
      })
    );
  };

  const onChangeNameInput = (event) => {
    setNameInput(event.target.value);
  };
  const onChangeCommentInput = (event) => {
    setCommentInput(event.target.value);
  };

  const onAddComment = (event) => {
    event.preventDefault();
    const randomIndex = Math.ceil(
      Math.random() * (initialContainerBackgroundClassNames.length - 1)
    );
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[randomIndex];
    //console.log(initialBackgroundColorClassName);
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
      // name: nameRef.current.value,
      // comment: commentTextRef.current.value,
    };
    setCommentList((prevCommentsList) => [...prevCommentsList, newComment]);
    setNameInput("");
    setCommentInput("");
    //setCommentList([...commentList, newComment]); not prefered
    // nameRef.current.value = "";
    // commentTextRef.current.value = "";
  };
  //console.log(commentList);
  return (
    <>
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-header">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={onChangeNameInput}
                // ref={nameRef}
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={onChangeCommentInput}
                //ref={commentTextRef}
              />
              <button type="submit" className="add-button">
                Add Button
              </button>
            </form>

            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentList.length}</span>
            Comments
          </p>
          <ul className="comments-container">
            {commentList.map((eachComment) => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={toggleIsLiked}
                deleteComment={deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comments;

// const [comment, setComment] = useState({
//   name: "",
//   commentText: "",
// });

// // Function to update the name
// const handleNameChange = (event) => {
//   setComment((prevComment) => ({
//     ...prevComment,
//     name: event.target.value,
//   }));
// };

// // Function to update the comment text
// const handleCommentTextChange = (event) => {
//   setComment((prevComment) => ({
//     ...prevComment,
//     commentText: event.target.value,
//   }));
// };

// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
