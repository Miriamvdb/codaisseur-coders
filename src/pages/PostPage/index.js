import { useParams } from "react-router-dom";
import "./styles.css";

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className="container-postpage">
      <h1>Posts</h1>
    </div>
  );
};

export { PostPage };
