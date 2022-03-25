import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/layouts";

export default function NotFoundPage(){
    return(
        <Layout title={"⛔ 404"}>
            <p className="h4 text-center">Vai a onde menó?</p>
            <p className="h5 text-center"><Link to="/">Retorne a Home</Link></p>
        </Layout>
    );
}