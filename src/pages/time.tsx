import {useState} from "react";
import Spinner from "./components/Spinner";

export default function Time() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        setLoading(true);
        
        const response = await fetch('/api/code/time', {
            method: 'POST',
            body: JSON.stringify({ prompt: dataObj.prompt }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        const formatted:any = "The time complexity of this function is " + result
        setData(formatted);
        setLoading(false);


        
}

    return (
        <div className="text-center">
        <div className="my-5 text-3xl"> Time Complexity Calculator⌛</div>
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
    )
}
