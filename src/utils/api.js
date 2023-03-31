const URL = "https://instaclone-nodejs-amaan.onrender.com";


export function getPost(){
    return fetch(`${URL}/posts`)
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};

export function newPost(post){
    return fetch(`${URL}/post`,{
        method: "POST",
        body: post
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
};

