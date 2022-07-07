import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/store";

const Backdrop = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      onClick={() => dispatch(closeModal())}
      className="flex items-center justify-center cursor-pointer h-screen w-screen overflow-hidden fixed top-0 left-0 bg-black/70 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
