import Image from "next/image";
import codeai from "../../public/img/codeai.png";
const About = () => {
  return (
    <>
      <div className="md:my-5 my-2  text-3xl md:text-5xl text-center">About💡</div>
      <p className="mx-20 text-base md:text-xl text-center my-5 mt-[3rem]">
        CodeAI is a web app that generates and explaines code for you. It uses a
        machine learning model to generate code based on your input. The model
        is trained on millions of code snippets and is capable of generating
        code for a variety of programming languages. The model is also capable
        of explaining the code it generates.
      </p>
      <div className="text-center">
        <div className=" text-xl md:text-3xl my-5 mt-[3rem]">Infrastructure🧱</div>
        <div className="flex justify-center">

          <Image src={codeai} alt="codeai infrastructure" width={800} height={500}  />

        {/* <img
          src="../img/codeai.png"
          alt="codeai infrastructure"
          className="md:w-[50vw] w-[80vw]"
        /> */}
        </div>
      </div>
    </>
  );
};

export default About;
