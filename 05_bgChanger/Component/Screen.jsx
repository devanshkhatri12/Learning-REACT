import React from "react";
import { useState } from "react";

function Screen() {

    const [color , setColor] = useState("white")

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex flex-col"
            style={{backgroundColor : color}}
            >
                <div class="flex-1">
                        <div class="fixed bottom-0 left-0 right-0 bg-amber-200 p-4 flex justify-center space-x-3 my-5 mx-auto w-fit rounded-xl">
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "red"}} onClick={() => setColor("red")}>Red</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "blue"}} onClick={() => setColor("blue")}>Blue</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "green"}} onClick={() => setColor("green")}>Green</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "grey"}} onClick={() => setColor("grey")}>Grey</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "pink"}} onClick={() => setColor("pink")}>Pink</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "indigo"}} onClick={() => setColor("indigo")}>Indigo</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "black"}} onClick={() => setColor("black")}>Black</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "orange"}} onClick={() => setColor("orange")}>Orange</button>
                        <button class=" text-white px-4 py-2 rounded-lg cursor-pointer" style={{backgroundColor : "cyan"}} onClick={() => setColor("cyan")}>Cyan</button>
                    </div>
                </div>

            </div>

        </>
    )
}



export default Screen;