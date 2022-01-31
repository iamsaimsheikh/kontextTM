import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function About() {

    const {theme} = useContext(ThemeContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark


    return (
        <div style = {{background: themeActive.ui }} className='about'>
            <p style = {{color: themeActive.syntax , background: themeActive.ui}}><b style={{fontSize:'x-large'}}>KONTEXT&trade;</b> is a customer-focused store, designed to spur discovery; a place where customers can find great books and products,
                 and learn more about our devices. To give you more information as you browse,
                  we’ve created unique features to highlight what people are reading,
                 how they are reading and what they are loving, to help customers discover great new books.</p>
        </div>
    )
}

export default About 
