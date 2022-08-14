import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

const Home = () => {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPost(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <h2 className="latestArticle">LATEST ARTICLES</h2>
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
};

export default Home;
