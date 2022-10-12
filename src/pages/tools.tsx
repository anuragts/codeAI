import { NextPage } from "next";
import { useRouter } from "next/router";
import { DiJavascript1 ,DiOpensource} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {VscFileCode,VscRegex} from 'react-icons/vsc'
import {AiOutlineFieldTime,AiFillCode,AiFillContainer} from 'react-icons/ai'


const Tools:NextPage = () => { 
  const router = useRouter();
  return (
    <>
      <div className=" mx-auto items-center text-center mt-3 md:mt-5 text-3xl md:text-5xl  w-full">tools🛠️</div>
      <div className="flex text-base md:text-xl flex-wrap mx-auto justify-center">
        {/* sql */}
        <div className="px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3  text-lg">
            <SiMysql className="inline text-5xl mx-3 " /> <br />{" "}
            <span className=""> query generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/sql")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Javascript generator */}
        <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7  text-lg">
            <DiJavascript1 className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/js")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Lang explainer  */}
        <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <VscFileCode className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> explainer </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/lang")}
            >
              Try Now
            </button>
          </div>
        </div>
         {/* Interview question generator */}
         <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <DiOpensource className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> Interview question generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/interview")}
            >
              Try Now
            </button>
          </div>
        </div>
          {/* Regular Expression generator */}
          <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <VscRegex className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/regex")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Time complexity */}
        <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <AiOutlineFieldTime className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> complexity calculator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/time")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Lang converter */}
        <div className=" px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <AiFillCode className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> converter </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/translate")}
            >
              Try Now
            </button>
          </div>
        </div>
         {/* Space complexity */}
        <div className=" w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10 px-5">
          <div className="text-center my-3 mt-7 text-lg">
            <AiFillContainer className="inline text-3xl mx-3 " /> <br />{" "}
            <span className="">Space complexity calculator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/space")}
              >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools

