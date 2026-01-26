import React from "react";
import Context from "./context";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
    
    return (
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export default UserContextProvider;