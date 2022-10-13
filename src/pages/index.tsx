import type { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import Transition from "./components/Transition";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Transition>
        <div className='md:text-5xl text-3xl text-center font-thin mt-10 md:mt-40'>
          Your <span className='text-third font-bold'>AI</span> pair
          <span className='text-third font-bold'> programmer</span>
        </div>
        <div>
          <div className='md:text-xl text-lg text-center font-thin text-accent my-4'>
            CodeAI uses openAI codex api to provide <br /> full explanation of
            code and many more.
          </div>
        </div>
        <div className='text-center'>
          <button
            className='bg-third text-base md:text-xl text-secondary rounded px-5 py-2 md:px-10 md:py-4 my-4 hover:bg-secondary hover:text-third border-2 border-third'
            onClick={() => router.push("/tools")}
          >
            Get Started{" "}
            <AiOutlineArrowRight className='inline text-xl 56md:text-3xl' />
          </button>
        </div>
      </Transition>
    </>
  );
};

export default Home;
