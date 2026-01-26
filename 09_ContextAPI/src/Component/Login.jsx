import React, {useState, useContext} from "react";
import Context from "../Context/context";

export default function Login() {
    
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const {setUser} = useContext(Context);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <>
           <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <div className="c p-8 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>

                <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-6 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
                >
                Submit
                </button>
            </div>
            </div>
        </>     
    )
}