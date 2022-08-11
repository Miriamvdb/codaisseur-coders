import { useState } from "react";
import { useDispatch } from "react-redux"; // 2.
import { useNavigate } from "react-router-dom";
import { createPostAction } from "../../store/feed/actions";
import "./styles.css";

const NewPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch(); // 2.
  const navigate = useNavigate(); // 4.

  const submitNewPost = (event) => {
    event.preventDefault();

    // 3. Dispatch the action with the new action creator
    // and send the newPost to the store
    dispatch(createPostAction(title, content));
    console.log("New post created", title, content);

    // 4.
    navigate("/");
  };

  return (
    <div className="container-newpostpage">
      <h1>New post</h1>
      <form onSubmit={submitNewPost}>
        <input
          className="input-newpost"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />
        <input
          className="input-newpost"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Tell your story"
        />
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export { NewPostPage };
