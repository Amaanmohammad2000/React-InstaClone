import React from "react";
import { createContext, useState, useEffect } from "react";
import { getPost } from "../utils/api";

export const List = createContext();

export default function Context({children}){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPost()
        .then((res)=>{
            setPosts(res.result.reverse());
        })
    }, []);
    return <List.Provider value={{
        posts: posts,
        addNewPost: (post) => {
            const newPost = [post,...posts];
            setPosts(newPost);
        }
    }}>{children}</List.Provider>
}