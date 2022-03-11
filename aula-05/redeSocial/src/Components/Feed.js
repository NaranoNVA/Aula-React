import React from 'react';
import Post from './Post';

function Feed({posts}) {

    return (
        <div>
            {
                posts.map((post, index) => 
                    <Post post={post} key={index}/>
                )
            }
        </div>
    );
  }
  
  export default Feed;