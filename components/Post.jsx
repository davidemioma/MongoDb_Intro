import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Moment from "react-moment";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  openModal,
  setModalType,
  setModalPost,
  setFetchPosts,
} from "../store/store";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const [showInput, setShowInput] = useState(false);

  const onImageClick = () => {
    dispatch(setModalPost(post));

    dispatch(setModalType("gifYouUp"));

    dispatch(openModal());
  };

  const deletePost = async () => {
    const res = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    dispatch(setFetchPosts(true));
  };

  return (
    <div className="bg py-2.5">
      <div className="flex items-center justify-between px-2.5 mb-3">
        <div className="flex items-center space-x-2">
          <Avatar src={post.userImg} />

          <div className="flex flex-col space-y-0.5">
            <p className="text-sm font-bold">{post.username}</p>

            <p className="text-xs dark:text-white/75">{post.email}</p>

            <p className="text-xs dark:text-white/75">
              <Moment fromNow date={post.createdAt} />
            </p>
          </div>
        </div>

        <MoreHorizRoundedIcon />
      </div>

      <p
        className={`${
          showInput ? "line-clamp-none" : "line-clamp-2 cursor-pointer"
        } text-sm font-semibold w-full px-2.5 mb-2`}
        onClick={() => setShowInput(!showInput)}
      >
        {post.input}
      </p>

      {post.photoUrl && (
        <img
          className="w-full cursor-pointer mb-2"
          onClick={onImageClick}
          src={post.photoUrl}
          alt=""
        />
      )}

      <div className="flex items-center justify-evenly mx-2.5 pt-2 text-black/60 dark:text-white/75 ">
        <button className="postBtn ">
          <ThumbUpOffAltRoundedIcon className="-scale-x-100" />

          <p>Like</p>
        </button>

        {session?.user?.email === post.email ? (
          <button className="postBtn hover:text-red-400" onClick={deletePost}>
            <DeleteRoundedIcon />

            <p>Delete post</p>
          </button>
        ) : (
          <button className="postBtn ">
            <ReplyRoundedIcon className="-scale-x-100" />

            <p>Share</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
