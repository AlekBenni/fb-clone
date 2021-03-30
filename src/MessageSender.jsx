import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./MessageSender.css"
import {useSelector} from 'react-redux'
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const user = useSelector(state => state.all.user)
        const [input, setInput] = useState('')
        const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(input)

        db.collection('posts').add({
            message: input,
            timesTemp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            userName: user.displayName,
            image: imgUrl
        })

        setInput("")
        setImgUrl("")
    }

    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <form>
                    <Avatar src={user.photoURL} />
                    <input
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    className="messageSender_input"
                    type="text" placeholder={`Whats on your mind ${user.displayName}?`}/>
                    <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.currentTarget.value)}
                    type="text" placeholder="Url image" />
                    <button type="submit"
                    onClick={handleSubmit}
                    >Hiden Submit</button>
                </form>
            </div>
            <div className="messageSenderBottom" >
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo Library</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Filing/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
