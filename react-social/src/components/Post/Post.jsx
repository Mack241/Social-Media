import React from 'react'
import { MoreVert } from '@material-ui/icons'
import './post.css'
import { Users } from '../../dummyData.js'
import { useState } from 'react'

const Post = ({ post }) => {

    const[like, setLike] = useState(post.like)
    const[isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        if(isLiked){
            setLike(like - 1)
            setIsLiked((prevState) => !prevState)
        }else{
            setLike(like + 1)
            setIsLiked((prevState) => !prevState)
        }
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt=''/>
                        <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt='' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img 
                          className='likeIcon' 
                          src='/assets/like.png'
                          onClick={likeHandler} 
                          alt=''/>
                        <img 
                          className='likeIcon' 
                          src='/assets/heart.png'
                          onClick={likeHandler} 
                          alt=''/>
                        <span className="postLikeCointer">{like} people reacted</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post