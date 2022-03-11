import React from 'react';
import { UserContext } from '../App';

function Post({post}) {
    const [username, setUsername] = React.useContext(UserContext);
    console.log(post.username);
    const isSameUser = post.username == username;

    return (
        <div>
            <div style={{maxWidth: '300px'}}>
                <div>
                    <h2>{post.username}</h2>
                </div>
                <div>
                    <span>{post.date.toLocaleString("pt-br")}</span>
                </div>
                <img src={ URL.createObjectURL(post.image)} style={{width: 300, height: 200, objectFit: "cover"}}/>
                <div style={{display: 'flex'}}>
                    <span style={{marginRight: 'auto'}}>{post.text}</span>
                    <span style={{marginLeft: 'auto'}}>Likes: {post.like}</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default Post;