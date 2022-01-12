import React, { useState, useEffect, useContext } from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import './feed.css'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext.js'
import { useParams } from 'react-router-dom'


const Feed = ({ username }) => {

    const [post, setPost] = useState([])
    const {user} = useContext(AuthContext)
    const currentUser = useParams().username

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ? await axios.get('/posts/profile/' + username)
            : await axios.get('/posts/timeline/' + user._id)
            // console.log(res)
            setPost(res.data.sort((p1,p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }))
            }
        fetchPosts()
    },[username, user._id])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                {user.username === currentUser || currentUser === undefined? <Share /> : <></>}
                 {post.map((p) => (
                     <Post key={p._id} post={p}/>
                 ))}
            </div>
        </div>
    )
}

export default Feed
