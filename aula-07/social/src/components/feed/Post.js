import React from 'react';
import Comment from './Comment';

function Post({post}){
    return (
        <article style={{ "maxWidth": "700px" }} className='border rounded-3 mx-auto my-3'>
            <div className='text-start m-3'>
                <img src={post.user.img} style={{  "maxWidth": 40, "maxHeight": 40 }} className="rounded-circle"></img>
                <span className='m-2 fw-bold'>{post.user.name}</span>
            </div>
            <div>
                <img src={post.img} className="img-fluid"></img>
            </div>
            <div className='text-start m-3'>
                <div>
                    <i className="fa-regular fa-heart fs-4 me-2"></i>
                    <i className="fa-regular fa-comment-dots fs-4 me-2"></i>
                </div>
                <div>
                    <span className='d-block fw-bold'>{ post.likes <= 1 ? post.likes + " like" : post.likes + " likes" }</span>
                    <span className='fw-bold'>{post.user.username}: </span>
                    <span>{post.text}</span>
                    {
                        post.coments.map((comment)=> 
                            <Comment comment={comment}/>
                        )
                    }
                </div>
            </div>
        </article>
    );
}

export default Post;