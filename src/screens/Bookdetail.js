import React, {useContext, useEffect,useState} from 'react'
import Alaska from '../temp/alaska.jpg'
import {ThemeContext} from '../contexts/ThemeContext'
import Rating from '../components/Rating'
import {BookContext} from '../contexts/BookContext'

function Bookdetail({match}) {

    const [bookId,setBookId] = useState(match.params.id) 

    const {theme} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark
    const themeInActive = theme.isLightTheme ? theme.dark : theme.light;
    const rating = `4`


    


    return (
        <div style = {{background: themeActive.ui }} className='book-detail-container'>

            <div className='book-picture-column'>
                <div style={{boxShadow: `0px 0px 10px ${themeInActive.ui}`}} className='book-picture-container'>
                    <img src={Alaska} className='book-picture'/>
                </div>
            </div>

            <div className='book-info-column'>
            {
                books.map(item => (

                    item.bookId === bookId ? 
                        <div className='book-info-container'>
                        <h1 style = {{color: themeActive.syntax , background: themeActive.background }}> {item.bookName} </h1>
                        <Rating rating={rating}/>
                        <h4 style = {{color: themeActive.syntax , background: themeActive.background }}> {item.bookAuthor} </h4>
                        <div style = {{color: themeActive.syntax , background: themeActive.background }} className='price'><h4><b>Price:</b></h4> <p> {item.bookPrice} </p></div>
                        <p style = {{color: themeActive.syntax , background: themeActive.background }}><b>Description:</b> {item.bookDesc} </p>
                        <button type='button' style={{boxShadow: `0px 0px 10px ${themeInActive.ui}` , background: themeInActive.ui , color: themeInActive.syntax , border : `1px solid ${themeInActive.syntax}`}} > <b>Buy Now!</b></button>
                        </div>

                    : null
                ))
            }
            </div>

        </div>
    )
}

export default Bookdetail
