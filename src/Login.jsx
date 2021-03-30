import React from 'react'
import "./login.css"
import Button from '@material-ui/core/Button';
import {auth, provider} from './firebase'
import {useDispatch} from 'react-redux'
import {addUserAC} from './Redux/reducer'

function Login() {

    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch(addUserAC(result.user))
        }).catch(error => alert(error.message))
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
