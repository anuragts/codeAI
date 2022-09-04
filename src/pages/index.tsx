import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const router = useRouter()

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
          CodeAI uses openAI codex api to provide <br/> full explanation of code and
          many more.
        </div>
      </div>
      <div className="text-center">
        <button className="bg-third text-white rounded px-4 py-2 my-4" onClick={() => router.push('/tools')} >
          Get Started
        </button>

        </div>
    </>
  );
};

export default Home;
