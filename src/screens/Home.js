import React , {useContext , useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar'
import Booklist from '../components/Booklist';
import Toggletheme from '../components/Toggletheme';
import Login from '../components/Login';
import About from '../components/About';
import Addbook from '../components/Addbook';


function Home() {

    const [tab,setTab] = useState('books')

    const { theme } = useContext(ThemeContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark

    return (
        <div className='container' style ={{ background: themeActive.ui }}>
            <Navbar setTab={setTab} />
            <Toggletheme />

            { tab === 'books' ?
            <Booklist /> : tab === 'login' ?
            <Login setTab={setTab} /> : tab === 'about' ? 
            <About /> : tab === 'add' ?
            <Addbook /> :
            null
            }
        </div>
    )
}

export default Home
