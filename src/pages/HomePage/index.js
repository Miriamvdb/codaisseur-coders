import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFeedPosts } from "../../store/feed/selectors";
import { fetchPosts } from "../../store/feed/actions";
import moment from "moment";
import "./styles.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  console.log("Posts?", posts);

  // Dispatch fetchPosts in useEffect
  // This is the necessary step to fetch the data and put it in the Redux store
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container-homepage">
      <h1>Feed</h1>
      {!posts
        ? "Loading.."
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <NavLink to={`/post/${post.id}`} className="link-homepage">
                  <h3>{post.title}</h3>
                </NavLink>
                <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
              </div>
            );
          })}
      <br />
      <button onClick={() => dispatch(fetchPosts())}>Load more..</button>
    </div>
  );
};

export { HomePage };
