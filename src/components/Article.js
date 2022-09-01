import React from "react";

function Article({post, date = "January 1, 1970"}) {
    // console.log(post.title)
    return (
        <article> 
           <h3>{post.title}</h3>
         <small>{post.date}</small>
            <p>{post.preview}</p>
        </article>
    )
}

export default Article;