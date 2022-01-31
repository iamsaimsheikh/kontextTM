
import React, {useContext,useEffect} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {BookContext} from '../contexts/BookContext'
import {Link} from 'react-router-dom'


function BookList() {

    const {theme} = useContext(ThemeContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark
    const {books} = useContext(BookContext);

    useEffect(()=>{

    },books)
    

    return (
        <div style = {{background: themeActive.ui }} className='book-list'>
            <ul>
                {
                    books.map((item)=>(
                    <Link to={`/bookdetail/${item.bookId}`}>
                    <li key={item.bookId} style = {{color: themeActive.syntax , background: themeActive.background , border: `1px solid ${themeActive.syntax}`}} >{item.bookName}</li>
                    </Link>
                    ))
                }
            
            </ul>
        </div>
    )
}

export default BookList