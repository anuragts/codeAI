// create a form and get the data from the form
// and send it to the server  and get the data from the server at /api/code/sql
// using nextjs and typescript

import React from 'react';

export default function Sql() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        setLoading(true);
        // console.log(dataObj.prompt);
        const response = await fetch('/api/code/sql', {
            method: 'POST',
            body: JSON.stringify({ prompt: dataObj.prompt }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        // console.log(result);    
        let formatted = result.replace(/(\r\n|\n|\\n|\r)/gm, ` \n ` )
        let formatted2:any = "SELECT"+formatted.replace(/ +(?= )/g,'');
        setData(formatted2);
        // console.log(result);
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
