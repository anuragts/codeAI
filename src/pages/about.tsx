import Image from "next/image";
import codeai from "../../public/img/codeaiArch.png";
import Link from "next/link";
const About = () => {
  return (
    <>
      <div className="md:my-5 my-2  text-3xl md:text-4xl text-center">About💡</div>
      <p className="max-w-4xl mx-auto text-base  md:text-xl text-center my-5 mt-[3rem]">  
CodeAI is the AI pair programmer you&apos;ve been looking for. <br/><br/>
The CodeAI web application helps you create code, convert your code from one language to another and explain your code with artificial intelligence.
<br/>
<br/>
The code is based on OpenAI - Codex, which is trained on millions of code snippets and can generate code for many different programming examples.
        
      </p>
      <div className="text-center">
        <div className=" text-xl md:text-3xl my-5 mt-[3rem]">Architecture 🧱</div>
        <div className="flex justify-center mx-auto ">

          <Image src={codeai} alt="codeai infrastructure" width={800} height={500}  />

        {/* <img
          src="../img/codeai.png"
          alt="codeai infrastructure"
          className="md:w-[50vw] w-[80vw]"
        /> */}
        </div>
      </div>
      <div className="md:my-5 my-2  text-3xl md:text-4xl text-center">Key Tools 🔧 </div>
      <p className="max-w-4xl mx-auto text-base  md:text-xl text-center my-5 mt-[3rem]">
        CodeAI has variety of <span className="text-third"><Link href="/tools">tools</Link></span> to help you while you code
      </p> 
      <ul className="list-disc marker:text-third max-w-4xl mx-auto md:text-xl text-center my-2 space-y-2 ">
      <li>Query generator : Helps you to generate MySQL query based on the prompt you have given.</li>
      <li>JS generator : Just tell CodeAI what you want and it&apos;ll generate javascript code.</li>
      <li>Code Explainer : Don&apos;t know what your code does? Give codeAI your code and it&apos;ll explain it.</li>
      <li>Interview question generator : Give codeAI a topic and it&apos;ll generate questions.</li>
      <li>Regex generator : Generates Regex for the type of function</li>
      <li>Code convertor : Makes it easy to convert code between various languages.</li>
      <li>Complexity calculator : Tells you about time complexity of the code.</li>
      <li>Space complexity calculator : Helps you find space complexity of your code.</li>
      </ul>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
