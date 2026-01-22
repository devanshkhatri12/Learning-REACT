import React from "react";
import { useParams } from "react-router";

export default function User(){
    const {userid} = useParams();
    return (
        <>
            <div className="text-center text-6xl text-white bg-gray-600 my-3 p-3 rounded">User: {userid}</div>
        </>
    )
}