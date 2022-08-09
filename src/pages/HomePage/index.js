import { useDispatch, useSelector } from "react-redux"; // 2.
import { useEffect } from "react"; // 3.
import { selectFeedPosts } from "../../store/feed/selectors"; // 2.
import { fetchPosts } from "../../store/feed/actions"; // 3.
import moment from "moment"; // 4.
import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch(); // 2.
  const posts = useSelector(selectFeedPosts); // 2.
  console.log("Posts?", posts);

  // 3. Dispatch fetchPosts in useEffect
  // This is the necessary step to fetch the data and put it in the Redux store
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // 4. Display data
  return (
    <div className="container-homepage">
      <h1>Feed</h1>
      {!posts
        ? "Loading.."
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>
                  {moment(post.createdAt).format("DD-MM-YYYY")}
                  {/* <span>
                    {post.tags.map((tag) => {
                      return <p key={tag.id}>{tag.tag}</p>;
                    })}
                  </span> */}
                </p>
              </div>
            );
          })}
    </div>
  );
};

export { HomePage };
