import React, { useState } from "react";
import Moment from "react-moment";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { setModalPost, setModalType, closeModal } from "../store/store";

const ModalPost = ({ post }) => {
  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);

  const onClick = () => {
    dispatch(setModalPost({}));

    dispatch(setModalType("dropIn"));

    dispatch(closeModal());
  };

  return (
    <div className="p-2.5">
      <div className="flex items-center justify-between space-x-3 mb-3">
        <div className="flex items-center space-x-2">
          <Avatar src={post.userImg} />

          <div className="flex flex-col space-y-0.5">
            <p className="text-sm">{post.username}</p>

            <p className="text-xs dark:text-white/75">{post.email}</p>

            <p className="text-xs dark:text-white/75">
              <Moment fromNow date={post.createdAt} />
            </p>
          </div>
        </div>

        <CloseRoundedIcon className="cursor-pointer h-5" onClick={onClick} />
      </div>

      <p
        className={`${
          showInput ? "line-clamp-none" : "line-clamp-2 cursor-pointer"
        } text-sm font-semibold w-full px-2.5 mb-2`}
        onClick={() => setShowInput(!showInput)}
      >
        {post.input}
      </p>

      <div className="flex items-center justify-evenly mx-2.5 pt-2 text-black/60 dark:text-white/75 dark:border-t border-gray-600/80">
        <button className="postBtn ">
          <CommentOutlinedIcon className="-scale-x-100" />

          <p>Comment</p>
        </button>

        <button className="postBtn ">
          <ReplyRoundedIcon />

          <p>Share</p>
        </button>
      </div>
    </div>
  );
};

export default ModalPost;
