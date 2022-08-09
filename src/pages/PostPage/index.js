import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostDetails } from "../../store/postPage/actions";
import "./styles.css";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container-postpage">
      <h1>Posts</h1>
    </div>
  );
};

export { PostPage };
