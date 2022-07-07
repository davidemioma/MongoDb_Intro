import React from "react";
import Head from "next/head";
import Image from "next/image";
import HomeNav from "../components/HomeNav";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { getProviders } from "next-auth/react";
import { stuff } from "../utils/mockData";

const Home = ({ providers }) => {
  return (
    <div className="relative space-y-10">
      <Head>
        <title>Home - Linkedin</title>
      </Head>

      <HomeNav providers={providers} />

      <main className="space-y-10 mx-auto max-w-screen-lg flex flex-col items-center xl:flex-row xl:items-start">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4">
            Welcome to your professional community
          </h1>

          <div className="space-y-4">
            {stuff?.map((item, i) => (
              <div
                key={i}
                className="bg-white cursor-pointer hover:shadow-xl max-w-md mx-auto flex items-center justify-between p-4 rounded-lg xl:mx-0 xl:ml-4"
              >
                <p className="text-lg text-black font-semibold">{item}</p>

                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative xl:absolute top-14 right-5 w-80 h-80 xl:w-[650px] xl:h-[650px]">
          <Image src="/assets/banner.svg" layout="fill" priority />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

export default Home;
