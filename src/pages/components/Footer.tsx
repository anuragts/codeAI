import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="md:px-2 py-1 fixed grid grid-cols-1 auto-cols-auto md:grid-cols-[auto_minmax(150px,_1fr)_auto] bottom-0 left-0 right-0 bg-third text-white content-center">
      <div className="md:table hidden mx-2 md:mx-4 md:my-2 text-center">
        <span className="table-cell text-base md:text-lg  align-middle">
          Made with <p className="inline text-sm md:text-lg">💙</p>
        </span>
      </div>
      <div className="md:table mx-2 md:mx-4 md:my-2 text-center md:text-right">
        <span className="md:table-cell text-sm md:text-lg align-middle cursor-pointer">
          {" "}
          <Link
            rel="stylesheet"
            href="https://github.com/Anurag30112003/codeAI/blob/main/CONTRIBUTING.md"
          >
            <div>
            Contribute to this project:
            <BsGithub className="inline devicon-github-original align-middle text-3xl md:text-4xl cursor-pointer mx-5" />
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
