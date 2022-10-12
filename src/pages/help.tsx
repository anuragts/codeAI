import { NextPage } from "next";
import Transition from "./components/Transition";

const Help: NextPage = () => {
  return (
    <>
      <Transition>
        <div className='text-center'>
          <div className='my-5 md:text-3xl text-2xl'> How to use🤔</div>
          <div className='flex justify-center my-10'>
            <iframe
              width='840'
              height='460'
              src='https://www.loom.com/embed/5e635fb1a95544d88c9005c1d8ebc54e'
              className='text-center'
            ></iframe>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Help;
