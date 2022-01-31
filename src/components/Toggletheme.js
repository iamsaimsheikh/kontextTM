import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Toggletheme() {

    const {theme , setLight , setDark} = useContext(ThemeContext)
    const themeActive = theme.isLightTheme ? theme.light : theme.dark;
    const themeInActive = theme.isLightTheme ? theme.dark : theme.light;

    

    return (
        <div style = {{background: themeActive.ui }} className='toggle-button'>
            {themeActive === theme.light ? 
            <>
            <div style = {{border : `1px solid ${themeInActive.ui}`}}>
                Light
            </div>
            <div style={{boxShadow: `0px 0px 10px ${themeInActive.ui}` , background: themeInActive.bg , color: themeInActive.syntax , border : `1px solid ${themeActive.syntax}`} } onClick={setDark}>
                Dark
            </div>
            </>
            : 
            
            <>
            <div style={{boxShadow: `0px 0px 10px ${themeInActive.ui}` , background: themeInActive.ui , color: themeInActive.syntax , border : `1px solid ${themeInActive.syntax}`}} onClick={setLight}>
                Light
            </div>
            <div style = {{border : `1px solid ${themeInActive.ui}` , color: themeInActive.ui}} >
                Dark
            </div>
            </>

            }
            
        </div>
    )
}

export default Toggletheme
