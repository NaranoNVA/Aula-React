import React from "react";
import Navbar from "./navbar";
import SEO from "./seo";

export default function Layout({children, title}) {
    return (
    <>
        <header>
            <SEO title={title}/>
            <Navbar/>
        </header>
        <main style={{ marginTop: "90px" }} className="container">
            {children}
        </main>
    </>);
}