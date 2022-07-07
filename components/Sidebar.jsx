import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="space-y-2 min-w-max max-w-lg">
      <div className="flex flex-col items-center text-center bg relative rounded-lg">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>

        <Avatar
          onClick={() => signOut()}
          src={session?.user?.image}
          className="cursor-pointer w-14 h-14 border-2 absolute top-4"
        />

        <div className="mt-5 px-3 py-4 space-y-0.5">
          <h4 className="decoration-purple-700 font-bold hover:underline cursor-pointer">
            {session?.user?.name}
          </h4>

          <p className="text-black/60 dark:text-white/75 text-sm">
            {session?.user?.email}
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="sidebarBtn space-y-0.5 font-medium">
            <div className="flex justify-between space-x-3">
              <p>Who viewed your profile</p>

              <p className="text-blue-500">321</p>
            </div>

            <div className="flex justify-between space-x-3">
              <p>Views of your post</p>

              <p className="text-blue-500">1032</p>
            </div>
          </div>

          <div className="sidebarBtn">
            <p className="text-xs text-white/75">
              Access exclusive tools & insights
            </p>

            <h3>
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />
              Try Premium for free
            </h3>
          </div>

          <div className="sidebarBtn flex items-center space-x-1.5">
            <BookmarkOutlinedIcon className="-ml-1" />

            <p>My items</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:sticky md:top-20 bg text-black/70 dark:text-white/75 flex-col space-y-2">
        <div className="space-y-2 py-2">
          <p className="sidebarLink">Groups</p>

          <div className="flex justify-between items-center">
            <p className="sidebarLink">Events</p>

            <AddRoundedIcon className="mr-1 h-5" />
          </div>

          <p className="sidebarLink">Followed Hashtags</p>
        </div>

        <div className="sidebarBtn text-center text-sm">
          <p className="dark:text-white font-medium">Discover More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
