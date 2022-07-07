import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { closeModal, setFetchPosts } from "../store/store";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const [photoUrl, setPhotoUrl] = useState("");

  const [input, setInput] = useState("");

  const [loading, setIsLoading] = useState(false);

  const uploadPost = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        input,
        photoUrl: photoUrl || "",
        username: session?.user?.name,
        email: session?.user?.email,
        userImg: session?.user?.image,
        createdAt: new Date().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    setIsLoading(false);

    setInput("");

    setPhotoUrl("");

    dispatch(setFetchPosts(true));

    dispatch(closeModal());
  };

  return (
    <form lassName="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows={4}
        value={input}
        placeholder="What do you want to talk about?"
        className="bg-transparent mb-3 outline-none w-full truncate dark:placeholder-white/75 max-w-xs md:max-w-sm"
        onChange={(e) => setInput(e.target.value)}
      />

      <input
        type="text"
        value={photoUrl}
        placeholder="Add a photo URL (optional)"
        className="bg-transparent mb-3 outline-none w-full truncate dark:placeholder-white/75 max-w-xs md:max-w-sm"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <div className="flex w-full justify-end">
        <button
          className="font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
          type="submit"
          onClick={uploadPost}
          disabled={loading || !input.trim()}
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default Form;
