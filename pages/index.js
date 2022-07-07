import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import Modal from "../components/Modal";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { connectToDatabase } from "../utils/mongodb";

const Dashboard = ({ session, posts, articles }) => {
  const modalState = useSelector((state) => state.ui.modalState);

  const modalTypeState = useSelector((state) => state.ui.modalTypeState);

  return (
    <div className="h-screen overflow-y-scroll bg-[#f3f2ef] dark:bg-black dark:text-white">
      <Head>
        <title>Linkedin</title>
      </Head>

      <Header />

      <main className="mt-5 flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col gap-5 md:flex-row">
          <Sidebar />

          <Feed posts={posts} />
        </div>

        <Widgets articles={articles} />
      </main>

      <AnimatePresence>
        {modalState && <Modal type={modalTypeState} />}
      </AnimatePresence>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  const { db } = await connectToDatabase();

  const docs = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  const posts = docs.map((post) => ({
    _id: post._id.toString(),
    input: post.input,
    photoUrl: post.photoUrl,
    username: post.username,
    email: post.email,
    userImg: post.userImg,
    createdAt: post.createdAt,
  }));

  const news = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      session,
      posts,
      articles: news.articles,
    },
  };
};

export default Dashboard;
