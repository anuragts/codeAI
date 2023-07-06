import { NextPage } from "next";
import { useRouter } from "next/router";
import { DiJavascript1, DiOpensource } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { VscFileCode, VscRegex } from "react-icons/vsc";
import {
  AiOutlineFieldTime,
  AiFillCode,
  AiFillContainer,
} from "react-icons/ai";

const ToolCards = [
  {
    title: "SQL Query Generator",
    icon: <SiMysql />,
    link: "/sql",
  },
  {
    title: "Javascript Generator",
    icon: <DiJavascript1 />,
    link: "/js",
  },
  {
    title: "Explainer",
    icon: <VscFileCode />,
    link: "/lang",
  },
  {
    title: "Interview Question Generator",
    icon: <DiOpensource />,
    link: "/interview",
  },
  {
    title: "Regex Generator",
    icon: <VscRegex />,
    link: "/regex",
  },
  {
    title: "Time Converter",
    icon: <AiOutlineFieldTime />,
    link: "/time",
  },
  {
    title: "Translate Code",
    icon: <AiFillCode />,
    link: "/translate",
  },
  {
    title: "Space Complexity Calculator",
    icon: <AiFillContainer />,
    link: "/space",
  },
];

const ToolCard = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: JSX.Element;
  link: string;
}) => {
  const router = useRouter();
  return (
    <div className="px-5 w-11/12 md:w-1/4  h-2/3 md:h-1/2 border-2 border-third mx-3 md:mx-5 my-10">
      <div className="text-center my-3 text-lg flex items-center justify-center flex-col">
        <div className="text-5xl ">{icon}</div>
        <br />
        <span>{title}</span>
      </div>
      <div className="text-center my-3">
        <button
          className="bg-third  text-base md:text-xl text-secondary rounded px-5 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
          onClick={() => {
            router.push(link);
          }}>
          Try Now
        </button>
      </div>
    </div>
  );
};

const Tools: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className=" mx-auto items-center text-center mt-3 md:mt-5 text-3xl md:text-5xl  w-full">
        Tools 🛠️
      </div>
      <div className="flex text-base md:text-xl flex-wrap mx-auto justify-center">
        {ToolCards.map((tool) => (
          <ToolCard title={tool.title} icon={tool.icon} link={tool.link} />
        ))}
      </div>
    </>
  );
};

export default Tools;
