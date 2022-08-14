import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "https://dev-theblog.herokuapp.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <p className="postDate">{new Date(post.createdAt).toDateString()}</p>
        <Link className="link" to={`/post/${post._id}`}>
          <p className="postTitle">{post.title}</p>
        </Link>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default Post;
