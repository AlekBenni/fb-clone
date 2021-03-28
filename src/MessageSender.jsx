import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./MessageSender.css"

function MessageSender() {
        const [input, setInput] = useState('')
        const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setInput("")
        setImgUrl("")
    }

    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <form>
                    <Avatar src="https://scontent.fhel4-1.fna.fbcdn.net/v/t1.0-9/117161506_655733315296457_8736053335936174191_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SuCczsgPS7YAX8pB6YP&_nc_ht=scontent.fhel4-1.fna&oh=284d3e76ae7125bc042925abf8817106&oe=607F0C8E" />
                    <input
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    className="messageSender_input"
                    type="text" placeholder="Whats on your mind?" />
                    <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.currentTarget.value)}
                    type="text" placeholder="Url image" />
                    <button tytpe="submit"
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
