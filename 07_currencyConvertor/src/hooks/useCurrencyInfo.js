import { useState, useEffect } from "react";

function useCurrencyInfo(currency) 
{
    // passsing empty object that it didn't crash while traverse
    const [data , setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data)
        
        // currency is dependecy : bcz when we change us -> in its value updated
    }, [currency])

    // console.log(data)
    return data
}
export default useCurrencyInfo;