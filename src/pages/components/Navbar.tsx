import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
const Navbar: NextPage = () => {
  console.log("Nothing to see here");
  return (
    <>
      <Head>
        <title>codeAI - Your AI pair programmer.</title>
        <meta name="description" content="Your AI pair programmer." />
      </Head>
      <div className="flex flex-row justify-between md:text-2xl text-base bg-gray-50 shadow-md">
        <Link href="/"><div className=" flex justify-items-center items-center px-10 py-0 text-5xl duration-300 "><span className="cursor-pointer">code<span className=" text-third mr-[1rem]">AI</span></span></div></Link>
        <div className="flex  md:text-2xl text-base right-0.5 text-justify">
        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-5 rounded-2xl hover:bg-third hover:text-white duration-300 ">
          <Link href="/about">About</Link>
        </div>
        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-5 rounded-2xl hover:bg-third hover:text-white duration-300 cursor-help">
          <Link href='/help'><div className="cursor-help">Guide</div></Link>
        </div>
        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-5 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
          <Link href="/tools">Tools</Link>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Navbar;