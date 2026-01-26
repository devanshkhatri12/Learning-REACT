import React, { useContext, useState } from "react";
import Context from "../Context/context";

export default function Profile() {

    const {user} = useContext(Context);
    
    if(!user) return <div>Please Login</div>

    return <h2 className="bg-gray-700 w-80 text-center text-2xl font-semibold text-white mb-6">Welcome {user.username}</h2>
}
