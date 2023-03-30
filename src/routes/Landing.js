import React from "react";
import {Link} from "react-router-dom";
export default function Landing(){
    return <div className="home">
        <div className="contents">
            <img className="thumbnail" src="/thumbnail.webp" alt=""/>
            <div className="nav">
                <h1 className="heading">10X Team 4</h1>
                <div className="button-container">
                    <Link to="/posts/all">
                        <button className="button">Enter</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}