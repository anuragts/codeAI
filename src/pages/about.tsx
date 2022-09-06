const About = () => {
  return (
    <>
      <div className="my-5 text-5xl text-center">About💡</div>
      <p className="text-xl text-center my-5 mt-[3rem]">
        CodeAI is a web app that generates and explaines code for you. It uses a
        machine learning model to generate code based on your input. The model
        is trained on millions of code snippets and is capable of generating
        code for a variety of programming languages. The model is also capable
        of explaining the code it generates.
      </p>
      <div className="text-center">
        <div className="text-3xl my-5 mt-[3rem]">Infrastructure🧱</div>
        <div className="flex justify-center">

        <img
          src="../img/codeai.png"
          alt="codeai infrastructure"
          className="w-[50vw]"
        />
        </div>
      </div>
    </>
  );
};

export default About;
