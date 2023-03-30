import React, { useContext } from "react";
import Posts from "../components/Post";
import {List} from "../components/Context";

export default function ViewPost(){
    const {posts} = useContext(List);
    return <>
        {posts.length === 0? <div className="emptyDB"><h2>No Posts are available</h2></div> : 
            posts.map(post => {
                return <Posts key={post._id} post={post}/>
            })}
    </>
}