import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>codeAI</title>
        <meta name="description" content="HackerNews but with better looks" />
      </Head>
      < div className="flex justify-center py-10 text-2xl">
        <div className="mx-[2rem] text-hacker cursor-pointer	">
          <Link href="/"><div>code<span className="text-third">AI</span></div></Link>
        </div>
        <div className="mx-[2rem] text-hacker">
          <Link href="/about">about📕</Link>
        </div>
        <div className="mx-[2rem] cursor-help	">
          <Link href='/help'><div className="cursor-help">how to use🤔</div></Link>
        </div>
        <div className="mx-[2rem] text-hacker">
          <Link href="/tools">tools🛠️</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;