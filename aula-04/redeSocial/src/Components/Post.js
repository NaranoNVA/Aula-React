import React from 'react';


function Post({post}) {
    return (
        <div>
            {
            <>
                <h2>{post.username}</h2> 
                <span>{post.date.toLocaleString("pt-br")}</span>
                <img src={ URL.createObjectURL(post.image)} style={{width: 300, height: 200, objectFit: "cover"}}/>
                <span>{post.like}</span>
                <span>{post.text}</span>
            </>
            }
        </div>
    );
  }
  
  export default Post;