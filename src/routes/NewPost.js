import React from "react";
import { useNavigate } from "react-router-dom";
import { newPost } from "../utils/api";
import { useContext, useState } from "react";
import {List} from "../components/Context";

export default function NewPostForm(){
    const [formData, setFormData] = useState({
        image: "",
        author: "",
        location: "",
        description: ""
        
    })
    const navigate = useNavigate();
    const {addNewPost} = useContext(List);

    function submit(e){
        e.preventDefault();
        const post = new FormData(e.target);

        post.append("likes", 0);
        post.append("date", new Date().toDateString());
        post.append("id", Date.now());

        newPost(post)
        .then((res) => {
            if(res.status === "Success"){
                addNewPost(res.result);
                setFormData({
                    image: "",
                    author: "",
                    location: "",
                    description: ""
                })
                navigate("../all");
            }
            else{
                alert("Sorry, failed to create post");
            }
        })
    }
    return <div>
        <div className="form-container">
            <form onSubmit={submit}>
                <div className="field-container">
                    <input type={"file"}  name="image" id="file" accept="image/*" required onChange={(e) => {
                        setFormData(input => {
                           return { 
                            ...input,
                            image : e.target.files[0]
                        }})
                    }}/>
                </div>
                <div className="field-container">
                    <input type={"text"}  name="name" id="author" placeholder="Author" required value={formData.author} onChange={(e) => {
                        setFormData(input => {
                           return { 
                            ...input,
                            author: e.target.value
                        }})
                    }}/>
                    <input type={"text"}  name="location" id="location" placeholder="Location" required value={formData.location} onChange={(e) => {
                        setFormData(input => {
                           return { 
                            ...input,
                            location: e.target.value
                        }})
                    }}/>
                </div>
                <div className="field-container">
                    <input type={"text"}  name="description" id="description" placeholder="Description" required value={formData.description} onChange={(e) => {
                        setFormData(input => {
                           return { 
                            ...input,
                            description: e.target.value
                        }})
                    }}/>
                </div>
                <div className="field-container">
                    <button className="submit-button" type={"submit"} >Post</button>
                </div>
            </form>
        </div>
    </div>
}