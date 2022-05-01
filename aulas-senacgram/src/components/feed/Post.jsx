import React, { useContext, useState } from 'react';
import Comment from './Comment';
import { useMutation } from '@apollo/client';
import { UserContext } from '../../auth';
import { INSERT_LIKE, REMOVE_LIKE } from '../../graphql/post/likes/mutation';

export default function Post({ post }) {
    const { currentUser } = useContext(UserContext);
    const [liked, setLiked] = useState(post.posts_likes.some( post_like => post_like.user_id === currentUser.id));
    const [likes, setLikes] = useState(post.posts_likes_aggregate.aggregate.count);

    const [setLike] = useMutation(INSERT_LIKE);
    const [setDeslike] = useMutation(REMOVE_LIKE);

    const handleLike = async () => {
        if(!liked){
            console.log("Deu Like");
            setLike({
                variables: {
                    post_id: post.id,
                    user_id: currentUser.id
                }
            }).then((retorno) => {
                setLiked(true);
                setLikes(likes+1);
            })
        }
        else{
            console.log("Removeu Like");
            setDeslike({
                variables: {
                    post_id: post.id,
                    user_id: currentUser.id
                }
            }).then((retorno) => {
                setLiked(false);
                setLikes(likes-1);
            })
        }
    }

    return (
        <article style={{ "maxWidth": '700px' }} className='mx-auto my-3 border rounded-1'>
            <div className='text-start m-3'>
                <img alt="img" src={post.user.image} className="rounded-circle" style={{ 'maxWidth': 40, 'maxHeight': 40 }} />
                <span className='mx-2 fw-bold'>{post.user.name}</span>
            </div>
            <div>
                <img alt="img" src={post.image} className="img-fluid" />
            </div>
            <div className='text-start m-3'>
                <div>
                    <button style={{ border: "inherit", background: "initial" }} onClick={handleLike}>
                        <i className={liked ? "fa-solid fa-heart fs-4 me-2" : "fa-regular fa-heart fs-4 me-2"}></i>
                    </button>
                    <i className="fa-regular fa-comment-dots fs-4"></i>
                </div>
                <div>
                    <span className='d-block fw-bold'>{likes === 1 ? `${likes} like` : `${likes} likes`}</span>
                    <span className='fw-bold'>{post.user.username}: </span>
                    <span>{post.text}</span>
                    {/*post.comments.map((comment, i) => <Comment key={`cc${i}`} comment={comment} />)*/}
                </div>
            </div>
        </article>);
}