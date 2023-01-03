import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Collaps } from "../components/Collaps";
import { LinkCard } from "../components/LinkCard";
import { dataList } from "../types";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:flex flex-wrap justify-between">
          <div className={`lg:w-1/5 bg-base-300 p-4 lg:min-h-screen`}>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-4">
                <span className="border-b-4 border-violet-500 text-violet-200">
                  Links
                </span>
                <span className="text-violet-500">Hub</span>
              </h1>

              <label className="btn btn-circle swap swap-rotate lg:hidden">
                <input
                  type="checkbox"
                  onClick={toggleSidebar}
                  className="lg:hidden"
                />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div
              className={`lg:block ${
                sidebar ? "block" : "hidden"
              } transition-all ease-in duration-300`}
            >
              <div className="flex flex-col gap-1 my-2">
                <h2 className="uppercase font-bold text-xl">frontend</h2>
                <Collaps title={"Images & Illustrations"} elements={data} />
                <Collaps title={"Fonts"} elements={data} />
                <Collaps title={"Animations"} elements={data} />
                <Collaps title={"Colors"} elements={data} />
              </div>

              <div className="flex flex-col gap-1 my-2">
                <h2 className="uppercase font-bold text-xl">backend</h2>
                <Collaps title={"Validators"} elements={data} />
                <Collaps title={"Security"} elements={data} />
              </div>
            </div>
          </div>

          <div className="lg:w-4/5 text-center mt-12">
            <h2 className="text-6xl font-bold text-violet-200">
              <span className="border-b-8 border-violet-500">Links</span>
              <span className="text-violet-500">Hub</span>
            </h2>
            <p className="uppercase font-semibold text-xl mt-6">
              ...coming soon
            </p>

            <LinkCard />
          </div>
        </div>
      </main>
    </>
  );
}

const data: dataList[] = [
  {
    name: "Lorem Ipsum-1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.",
    url: "https://resource.link",
  },
  {
    name: "Lorem Ipsum-2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.",
    url: "https://resource.link",
  },
  {
    name: "Lorem Ipsum-3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.",
    url: "https://resource.link",
  },
];
