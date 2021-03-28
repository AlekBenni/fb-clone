import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./Posts.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Posts({ profilePic, image, userName, timesTemp, message }) {
    return (
        <div className="posts">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>{timesTemp}</p>
                </div>
            </div>
            <div className="post__bottom">
                {message}
            </div>
            <div className="post__img">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comments</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Posts
