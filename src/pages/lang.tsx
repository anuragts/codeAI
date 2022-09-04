import { useState } from "react";
export default function Lang() {
    // get selected language from select element
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        // console.log(dataObj);
        setLoading(true);

        const response = await fetch('/api/code/lang', {
            method: 'POST',
            body: JSON.stringify({ prompt: dataObj.prompt, lang: dataObj.lang }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        let formatted = result.replace(/(\r\n|\n|\\n|\r)/gm, ` \n ` )
        let formatted2:any =  formatted.replace(/ +(?= )/g,'');

        setData(formatted2);
        setLoading(false);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="lang" id="">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
                <input type="text" name="prompt" placeholder="Enter your query" />
                <button type="submit">Submit</button>
            </form>
            {loading ? <div>Loading...</div> : null}
            <pre>{data}</pre>
        </div>
    )
}