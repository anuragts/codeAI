import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Navbar: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>codeAI - Your AI pair programmer.</title>

        <meta
          property="og:image"
          content="https://code.tfss.live/api/og"
          name="description"
        />
      </Head>
      <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <div className="logo">
            <Link href="/">
              <div className=" flex justify-items-center items-center px-5 py-0 text-4xl duration-300 ">
                <span className="cursor-pointer">
                  code<span className=" text-third mr-[1rem]">AI</span>
                </span>
              </div>
            </Link>
          </div>
          <div className=" flex-row items-center   hidden lg:inline-flex md:inline-flex list-none">
            <li>
              <div className="  p-5 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
                <Link href="/about">About</Link>
              </div>
            </li>
            <li>
              <div className=" p-5 rounded-2xl hover:bg-third hover:text-white duration-300 inline cursor-help">
                <Link href="/help">Guide</Link>
              </div>
            </li>
            <li>
              <div className="  p-5 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
                <Link href="/tools">Tools</Link>
              </div>
            </li>
          </div>
          <div className="lg:hidden md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-third focus:bg-third"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <div className=" flex justify-items-center items-center px-1 py-0 text-5xl duration-300 ">
                          <span className="cursor-pointer">
                            code
                            <span className=" text-third mr-[1rem]">AI</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-3 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
                          <Link href="/about">About</Link>
                        </div>
                      </li>
                      <li>
                        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-3 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
                          <Link href="/help">Guide</Link>
                        </div>
                      </li>
                      <li>
                        <div className="mx-[0.5rem] my-[0.5rem] md:mx-[2rem] p-3 rounded-2xl hover:bg-third hover:text-white duration-300 inline ">
                          <Link href="/tools">Tools</Link>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
