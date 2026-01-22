import React, { useEffect, useState } from "react";
import {useLoaderData} from "react-router";

export default function Github(){
    const data = useLoaderData();
    
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/search/commits?q=author:devanshkhatri12')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <>
            <div className="text-center text-6xl text-white bg-gray-600 my-3 p-3 rounded">GitHub Total commits: {data.total_count}</div>
            
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/search/commits?q=author:devanshkhatri12')
    return response.json();
}