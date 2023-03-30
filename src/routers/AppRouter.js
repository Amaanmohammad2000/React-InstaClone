import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Landing from "../routes/Landing";;
import NewPost from "../routes/NewPost";
import PostView from "../routes/PostView";
import ViewPost from "../routes/Viewpost";

export default function Routers(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="posts" element={<PostView/>}>
                <Route path="all" element={<ViewPost/>}/>
                <Route path="newpost" element={<NewPost/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}