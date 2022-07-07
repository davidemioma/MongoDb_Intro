import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { gifYouUp, dropIn } from "../utils/mockData";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { closeModal, setModalType, setModalPost } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import Form from "./Form";
import ModalPost from "./ModalPost";

const Modal = ({ type }) => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const modalPost = useSelector((state) => state.posts.modalPost);

  const onImageDoubleClicked = () => {
    dispatch(setModalPost({}));

    dispatch(setModalType("dropIn"));

    dispatch(closeModal());
  };

  return (
    <Backdrop>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white z-50 dark:bg-[#1D2226] rounded-xl w-[90%] xs:w-[330px]"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center justify-between border-b border-white/75 px-4 py-2.5">
            <h4 className="text-xl">Create a post</h4>

            <IconButton onClick={() => dispatch(closeModal())}>
              <CloseRoundedIcon className="h-7 w-7 dark:text-white/75" />
            </IconButton>
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Avatar src={session?.user?.image} className="!h-11 !w-11" />

              <h6>{session?.user?.name}</h6>
            </div>

            <Form />
          </div>
        </motion.div>
      )}

      {type === "gifYouUp" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="flex overflow-x-scroll scrollbar-hide bg-[#1D2226] w-full mx-6 max-w-6xl -mt-[7vh] rounded-l-lg"
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.img
            className="object-contain cursor-pointer max-h-[80vh] w-full max-w-3xl rounded-l-lg"
            src={modalPost.photoUrl}
            alt=""
            onDoubleClick={onImageDoubleClicked}
          />

          <div className="w-full md:w-[3/5] bg-white dark:bg-[#1D2226] rounded-r-lg">
            <ModalPost post={modalPost} />
          </div>
        </motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
