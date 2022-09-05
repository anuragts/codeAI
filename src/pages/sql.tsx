import React from "react";
import Spinner from "./components/Spinner";

export default function Sql() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataObj = Object.fromEntries(data);
    setLoading(true);
    // console.log(dataObj.prompt);
    const response = await fetch("/api/code/sql", {
      method: "POST",
      body: JSON.stringify({ prompt: dataObj.prompt }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    // console.log(result);
    let formatted = result.replace(/(\r\n|\n|\\n|\r)/gm, ` \n `);
    let formatted2: any = "SELECT " + formatted.replace(/ +(?= )/g, "");
    setData(formatted2);
    // console.log(result);
    setLoading(false);
    
  };
  return (
    <div className="text-center">
      <div className="my-5 text-3xl"> SQL Query Generator🚀 </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text-xl resize rounded-md mt-5 px-20 py-5  " name="prompt" placeholder="Enter your query" /> <br />
        <button
          type="submit"
          className="bg-third text-xl text-secondary mt-10 rounded px-10 py-2 my-4 hover:bg-secondary hover:text-third border-2 border-third"
        >
          Submit
        </button>
      </form>
      {loading ? <Spinner/> : null}
      <textarea className="resize rounded-md w-[40rem] h-[20rem] text-center py-5 mt-10" value={data}></textarea>
    </div>
  );
}
