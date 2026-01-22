import React from "react";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>               
            <Footer/>
        </>
    )
}