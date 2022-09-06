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
      < div className="flex justify-center py-10 md:text-2xl text-base	">
        <div className=" cursor-pointer	">
          <Link href="/"><div className="ml-[0.5rem] md:ml-[2rem]">code<span className="text-third mr-[1rem]">AI</span></div></Link>
        </div>
        <div className="mx-[0.5rem] md:mx-[2rem] ">
          <Link href="/about">about📕</Link>
        </div>
        <div className="mx-[0.5rem] md:mx-[2rem] cursor-help	">
          <Link href='/help'><div className="cursor-help">guide🤔</div></Link>
        </div>
        <div className="mx-[0.5rem] md:mx-[2rem] inline ">
          <Link href="/tools">tools🛠️</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;