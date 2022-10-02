import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import useState from "react"

const Navbar: NextPage = () => {
  const [dark, setDark] = useState("false");
  const DarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(false);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(true);
    }
  };
  return (
    <>
      <Head>
        <title>codeAI - Your AI pair programmer.</title>
        <meta name="description" content="Your AI pair programmer." />
      </Head>
<<<<<<< HEAD
      < div className="flex justify-center dark:bg-black dark:text-white py-10 md:text-2xl text-base	">
        <div className=" cursor-pointer	">
          <Link href="/"><div className="ml-[0.5rem] md:ml-[2rem]">code<span className="text-third mr-[1rem]">AI</span></div></Link>
        </div>
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" onClick={DarkMode} id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
</div>
        <div className="mx-[0.5rem] md:mx-[2rem] ">
          <Link href="/about">about📕</Link>
=======
      <div className="flex flex-row justify-between md:text-2xl text-base bg-gray-50 shadow-md">
        <Link href="/"><div className=" flex justify-items-center items-center px-10 py-0 text-5xl duration-300 "><span className="cursor-pointer">code<span className=" text-third mr-[1rem]">AI</span></span></div></Link>
        <div className="flex  md:text-2xl text-base right-0.5 text-justify">
        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-5 rounded-2xl hover:bg-third hover:text-white duration-300 ">
          <Link href="/about">About</Link>
        </div>
        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-5 rounded-2xl hover:bg-third hover:text-white duration-300 cursor-help">
          <Link href='/help'><div className="cursor-help">Guide</div></Link>
>>>>>>> 9f8993e9c4b947e2ae0052d833296b61ded941eb
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