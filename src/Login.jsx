import React from 'react'
import "./login.css"
import Button from '@material-ui/core/Button';

function Login() {

    const signIn = () => {
        alert("hello")
    }

    return (
        <div className="login__wrapper">
        <div className="login">
                <div>
                    <img className="fb_logo" src="https://png.pngtree.com/png-clipart/20190215/ourlarge/pngtree-facebook-icon-png-image_548407.jpg" alt=""/>
                </div>
                <div>
                    <img className="fb_text" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
                </div>
                <div  className="btn">
                <Button variant="contained" color="primary" type="submit" onClick={signIn}>
                    LOGIN IN
                </Button>
                </div>

        </div>
        </div>
    )
}

export default Login
