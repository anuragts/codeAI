import { useState } from "react";

export default function Translate() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        console.log(dataObj);

        setLoading(true);

        const response = await fetch('/api/code/translate', {
            method: 'POST',
            body: JSON.stringify({ prompt: dataObj.prompt,lang1: dataObj.lang1,lang2: dataObj.lang2 }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();

        let formatted = result.replace(/(\r\n|\n|\\n|\r)/gm, ` \n ` )
        let formatted2:any = formatted.replace(/ +(?= )/g,'');
        let formatted3:any = formatted2.replace(/;/g, `; \n ` )

        setData(formatted3);
        setLoading(false);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <select name="lang1" id="">
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                </select>
                <select name="lang2" id="">
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