import { NextPage } from "next";
import { useRouter } from "next/router";
import { DiJavascript1 } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {VscFileCode} from 'react-icons/vsc'
import {AiOutlineFieldTime,AiFillCode} from 'react-icons/ai'


const Tools:NextPage = () => { 
  const router = useRouter();
  return (
    <>
      <div className="text-center mt-5 text-5xl">tools🛠️</div>
      <div className="flex text-xl flex-wrap flex-row justify-center">
        {/* sql */}
        <div className="w-1/4 h-1/2 border-2 border-third mx-5 my-10">
          <div className="text-center my-3  text-lg">
            <SiMysql className="inline text-5xl mx-3 " /> <br />{" "}
            <span className=""> query generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/sql")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Javascript generator */}
        <div className="w-1/4 h-1/2 border-2 border-third mx-5 my-10">
          <div className="text-center my-3 mt-7  text-lg">
            <DiJavascript1 className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> generator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/js")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Lang explainer  */}
        <div className="w-1/4 h-1/2 border-2 border-third mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <VscFileCode className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> explainer </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/lang")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Time complexity */}
        <div className="w-1/4 h-1/2 border-2 border-third mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <AiOutlineFieldTime className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> complexity calculator </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/time")}
            >
              Try Now
            </button>
          </div>
        </div>
        {/* Lang converter */}
        <div className="w-1/4 h-1/2 border-2 border-third mx-5 my-10">
          <div className="text-center my-3 mt-7 text-lg">
            <AiFillCode className="inline text-3xl mx-3 " /> <br />{" "}
            <span className=""> converter </span>
          </div>
          <div className="text-center my-3">
            <button
              className="bg-third text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
              onClick={() => router.push("/translate")}
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

