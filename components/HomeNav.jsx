import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const HomeNav = ({ providers }) => {
  const { data: session } = useSession();

  const router = useRouter();

  const onClick = (id) => {
    signIn(id);

    router.push("/");
  };

  return (
    <header className="flex items-center justify-around">
      <div className="relative w-36 h-20">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:inline-flex items-center space-x-6 pr-4 sm:border-r">
          <NavLinks Icon={ExploreIcon} text="discover" />

          <NavLinks Icon={GroupIcon} text="people" />

          <NavLinks Icon={OndemandVideoSharpIcon} text="learning" />

          <NavLinks Icon={BusinessCenterIcon} text="jobs" />
        </div>

        {session ? (
          <Link href="/">
            <div className="flex items-center space-x-2 text-blue-700 border border-blue-700 py-1.5 px-5 rounded-full cursor-pointer font-semibold hover:border-2">
              <p className="text-sm">Dashboard</p>

              <ArrowForwardIosRoundedIcon className="h-5 w-5 " />
            </div>
          </Link>
        ) : (
          <div>
            {Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                className="text-blue-700 border border-blue-700 text-sm md:text-base py-1.5 px-5 rounded-full font-semibold hover:border-2"
                onClick={() => onClick(provider.id)}
              >
                Sign In With {provider.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeNav;
