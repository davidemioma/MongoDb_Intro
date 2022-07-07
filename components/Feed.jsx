import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFetchPosts, setUseSSRPosts } from "../store/store";
import Input from "./Input";
import Post from "./Post";

const Feed = ({ posts }) => {
  const dispatch = useDispatch();

  const canFetchPosts = useSelector((state) => state.posts.fetchPosts);

  const useSSrPosts = useSelector((state) => state.posts.useSsrPosts);

  const [clientSidePosts, setClientSidePosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      setClientSidePosts(result);

      dispatch(setUseSSRPosts(false));

      dispatch(setFetchPosts(false));
    };

    fetchPosts();
  }, [canFetchPosts]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />

      {!useSSrPosts
        ? clientSidePosts?.map((post) => <Post key={post._id} post={post} />)
        : posts?.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
