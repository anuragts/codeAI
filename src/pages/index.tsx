import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {AiOutlineArrowRight} from "react-icons/ai";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>codeAI</title>
      </Head>
      <div className="text-5xl	 text-center font-thin mt-40">
        Your <span className="text-third font-bold">AI</span> pair{" "}
        <span className="text-third font-bold">programmer</span>
      </div>
      <div>
        <div className="text-xl text-center font-thin text-accent my-4">
          CodeAI uses openAI codex api to provide <br /> full explanation of
          code and many more.
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-third text-xl text-secondary rounded px-10 py-4 my-4 hover:bg-secondary hover:text-third border-2 border-third"
          onClick={() => router.push("/tools")}>
          Get Started <AiOutlineArrowRight className="inline text-3xl" />
        </button>
      </div>
    </>
  );
};

export default Home;
