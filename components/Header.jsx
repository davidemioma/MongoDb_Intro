import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NavLinks from "./NavLinks";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  const { themes, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 bg-white lg:pt-0.5 px-3 dark:bg-[#1D2226] flex items-center justify-around focus-within:shadow-lg">
      <div className="flex items-center space-x-6">
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image src="https://rb.gy/bizvqj" width={45} height={45} />
            ) : (
              <Image
                src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
                width={55}
                height={55}
              />
            )}
          </>
        )}

        <div className="hidden sm:inline-flex items-center space-x-1 py-2 px-4 dark:bg-gray-700 rounded w-full">
          <SearchRoundedIcon />

          <input
            className="flex-grow outline-none text-sm bg-transparent placeholder:text-black/70 dark:placeholder:text-white/75"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <NavLinks Icon={HomeRoundedIcon} text="Home" feed active />

        <NavLinks Icon={GroupIcon} text="My Network" feed />

        <NavLinks Icon={BusinessCenterIcon} text="Jobs" feed hidden />

        <NavLinks Icon={ChatIcon} text="Messaging" feed hidden />

        <NavLinks Icon={NotificationsIcon} text="Notifications" feed />

        <NavLinks Icon={Avatar} text="Me" feed avatar />

        <NavLinks Icon={AppsOutlinedIcon} text="Work" feed hidden />

        {mounted && (
          <div
            className={`bg-gray-600 relative px-0.5 flex items-center w-12 h-6 rounded-full cursor-pointer flex-shrink-0 ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="absolute left-0">🌜</span>

            <motion.div
              className="bg-white w-5 h-5 rounded-full z-40"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />

            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
