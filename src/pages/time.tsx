import React from "react";

export default function Time() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

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

        setData(result);
        setLoading(false);


        
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="prompt" placeholder="Enter your query" />
                <button type="submit">Submit</button>
            </form>
            {loading ? <div>Loading...</div> : null}
            <pre>{data}</pre>
        </div>
    )
}
