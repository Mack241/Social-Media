import React from 'react'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

const Profile = () => {
    return (
        <>
        <Topbar />
        <div className="profile">
            <SideBar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                      <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
                      <img className='profileUserImg' src="/assets/person/7.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Mayukh Dasgupta</h4>
                        <span className='profileInfoDesc'>Hey there!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed />
                <RightBar profile/>
                </div>
            </div> 
        </div>
    </>
    )
}

export default Profile
