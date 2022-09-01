import React from "react";
// import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(props) {
// console.log(props)
    const posts = props.posts.map((post) => {
        // console.log(posts)
        return <Article key = {post.id} post = {post}/>
    }) 

    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList;
