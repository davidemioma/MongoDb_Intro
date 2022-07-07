import React from "react";
import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import { useDispatch } from "react-redux";
import { openModal, setModalType } from "../store/store";

const Input = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  const onClickhandler = () => {
    dispatch(openModal());

    dispatch(setModalType("dropIn"));
  };

  return (
    <div className="bg p-3">
      <div className="flex items-start space-x-2">
        <Avatar
          src={session?.user?.image}
          className="h-10 w-10 cursor-pointer"
        />

        <div>
          <button
            className="w-full rounded-full mb-3 border border-gray-400 p-2.5 text-sm text-left opacity-80 hover:opacity-100 font-medium transition transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
            onClick={onClickhandler}
          >
            Start a post
          </button>

          <div className="flex items-center flex-wrap justify-center gap-4 md:gap-x-10">
            <button className="group inputBtn">
              <PhotoSizeSelectActualIcon className="text-blue-400" />

              <p className="opacity-80 group-hover:opacity-100">Photo</p>
            </button>

            <button className="group inputBtn">
              <VideoCameraBackIcon className="text-green-400" />

              <p className="opacity-80 group-hover:opacity-100">Video</p>
            </button>

            <button className="group inputBtn">
              <BusinessCenterIcon className="text-blue-300" />

              <p className="opacity-80 group-hover:opacity-100">Job</p>
            </button>

            <button className="group inputBtn">
              <ArticleIcon className="text-red-400" />

              <p className="opacity-80 group-hover:opacity-100">
                Write Article
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
