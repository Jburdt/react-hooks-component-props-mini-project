import React from "react";
import blogData from "../data/blog";

function About ( image ='https://via.placeholder.com/215', about ) {
    // console.log(props.image)
    return (
        <aside>
            <img alt="blog logo" src={blogData.image}/>
            <p>{blogData.about}</p>
        </aside>
    )
}
export default About;