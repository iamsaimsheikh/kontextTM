import React, {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

function Login({setTab}) {
    const {logIn} = useContext(AuthContext);
    const {theme} = useContext(ThemeContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const loginBtnHandler = () =>{
        if(username && password){
            logIn(username,password)
            setTab('books')
        }
    }


    return (
        <div style = {{background: themeActive.ui }} className='login'>
            
                <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}} />
                <button value='Login' onClick={loginBtnHandler} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}}>Login</button>
            
        </div>
    )
}

export default Login
