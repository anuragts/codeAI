import { ChangeEvent,  useState } from "react";
import Spinner from "./components/Spinner";
import copy from "copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";

export default function Translate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataObj = Object.fromEntries(data);
    console.log(dataObj);

    setLoading(true);

    const response = await fetch("/api/code/translate", {
      method: "POST",
      body: JSON.stringify({
        prompt: dataObj.prompt,
        lang1: dataObj.lang1,
        lang2: dataObj.lang2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    const y = result.choices[0].text;
    let formatted = y.replace(/(\r\n|\n|\\n|\r)/gm, ` \n `);
    let formatted2: any = formatted.replace(/ +(?= )/g, "");
    let formatted3: any = formatted2.replace(/;/g, `; \n `);

    setData(formatted3);
    setLoading(false);
  };
  return (
    <>
      <div className="text-center text-sm md:text-xl">
        <div className="md:my-5 my-2  text-xl md:text-3xl">
          {" "}
          Language converter 🔄
        </div>
        <form onSubmit={handleSubmit} >
          <select
            name="lang1"
            id="lang1"
            className="md:text-xl text-base resize rounded-md my-5 mx-5 py-3 md:py-5 px-3 md:px-5 text-third border-2 border-third"
            onChange={updateSelect('lang1' , 'lang2')
            }
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="typescript">TypeScript</option>
            
          </select>
          <select
            name="lang2"
            id="lang2"
            className="md:text-xl text-base resize rounded-md my-5 mx-5 py-3 md:py-5 px-3 md:px-5 text-third border-2 border-third"
            onChange={updateSelect('lang2' , 'lang1')}
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </select>
          <input
            type="text"
            className="md:text-xl text-base resize rounded-md mt-5 px-2 md:px-20 md:py-5 py-3"
            name="prompt"
            placeholder="Enter your query"
            required

          />{" "}
          <br />
          <button
            type="submit"
            className="bg-third text-base md:text-xl text-secondary mt-10 rounded  px-8 md:px-10 py-2 md:my-4 my-2 hover:bg-secondary hover:text-third border-2 border-third"
          >
            Submit
          </button>
        </form>

        {loading ? <Spinner /> : null}
        <textarea
          className="resize rounded-md  sm:w-[20rem] sm:h-[20rem] w-[21rem] h-[15rem]  md:w-[40rem] md:h-[20rem]  py-5 px-1 mt-10"
          value={data}
        ></textarea>
        <br />
        <button
          type="button"
          value="copy text"
          className="bg-third text-base md:text-xl cursor-pointer text-secondary mt-8 md:mt-2 rounded px-6 md:px-10 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
          onClick={() => {
            copy(`${data}`);
            alert("Copied to clipboard");

          }}
        >
          {" "}
          <BsClipboard className="inline" /> copy to clipboard
        </button>
      </div>
    </>
  );
}
function updateSelect(a: string , b: string): any  {
  var first = document.getElementById(a) as HTMLSelectElement
  var other = document.getElementById(b) as HTMLSelectElement
  console.log(a+" "+b)
  // for(var i = 0 ; i< other.options.length ; ++i)
  // {
  //   other.options[i].disabled = false
  // }
  // if(first.selectedIndex == 0){
  //   return;
  // }
  // other.options[first.selectedIndex].disabled = true
  // console.log(other.options.length)
}

