import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

function Navbar({setTab}) {

    const { theme } = useContext(ThemeContext);
    const { auth , logIn , logOut } = useContext(AuthContext);


    const themeActive = theme.isLightTheme ? theme.light : theme.dark

    return (
        <div style = {{background: themeActive.ui }} className='nav-bar'>
            <h2 style = {{color: themeActive.syntax , background: themeActive.background }}>Welcome to KONTEXT&trade;</h2>
            <div className='nav-links'>
                <ul>
                    { auth.isLoggedIn ?
                    <>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => setTab('books')} >Books</li>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => setTab('add')} >Add Book</li>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => logOut()} >Logout</li>
                    </>
                    :
                    <>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => setTab('books')} >Books</li>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => setTab('about')} >About</li>
                    <li style = {{color: themeActive.syntax , background: themeActive.background }} onClick={() => setTab('login')} >Login</li>
                    </>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
