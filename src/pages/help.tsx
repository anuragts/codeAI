import { NextPage } from "next";

const Help: NextPage = () => {
  return (
    <>
      <div className="text-center">
        <div className="my-5 md:text-3xl text-2xl"> How to use🤔</div>
        <div className="flex">
        <iframe
        className="mx-auto mt-5 mb-10 "
          width="920"
          height="450"
          src="https://www.youtube.com/embed/NwOmuxLQq5o?autoplay=1&mute=1&loop=1"
        ></iframe>
        </div>
      </div>
    </>
  );
};

export default Help;
