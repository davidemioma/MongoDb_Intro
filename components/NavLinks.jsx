import React from "react";
import { useSession } from "next-auth/react";

const NavLinks = ({ Icon, text, avatar, feed, active, hidden }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white "
          : "text-gray-500 hover:text-gray-700"
      } ${hidden && "hidden md:inline-flex"} ${
        active && "text-black dark:text-white"
      }`}
    >
      {avatar ? (
        <Icon className="!h-7 !w-7" src={session?.user?.image} />
      ) : (
        <Icon />
      )}

      <p className={`capitalize text-sm ${feed && "hidden lg:inline-flex"}`}>
        {text}
      </p>

      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  );
};

export default NavLinks;
