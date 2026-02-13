import { createContext, useContext } from "react";
import React from "react";

export const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// context
export const ThemeProvider = themeContext.Provider;

// custom hook
export default function usetheme(){
    return useContext(themeContext);
}