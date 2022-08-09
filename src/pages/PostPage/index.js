import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchPostDetails } from "../../store/postPage/actions";
import { selectPostAndComments } from "../../store/postPage/selectors";
import "./styles.css";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postAndComments = useSelector(selectPostAndComments);
  console.log("Post and comments?", postAndComments);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (!postAndComments) return <div>Loading..</div>;
  const { post, comments } = postAndComments;

  return (
    <div className="container-postpage">
      <NavLink className="link-postpage" to="/">
        Back
      </NavLink>
      <h1>{post.title}</h1>
      <p className="meta">
        By <strong>{post.developer.name}</strong> &bull;{" "}
        {moment(post.createdAt).format("DD-MM-YYYY")}
      </p>
      <p>{post.content}</p>
      <div>
        <h2
          style={{
            marginTop: "3rem",
            borderTop: "1px black solid",
            paddingTop: "1.5rem",
          }}
        >
          Comments
        </h2>
        {comments.rows.length === 0 ? (
          <p>
            <em>No comments left behind yet...</em>
          </p>
        ) : (
          comments.rows.map((comment) => {
            return (
              <div key={comment.id}>
                <p>
                  <b>{comment.developer.name}</b> &bull; {comment.text} &bull;{" "}
                  {moment(comment.createdAt).format("DD-MM-YYYY")}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export { PostPage };
