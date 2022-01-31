import React,{useContext,useEffect,useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {BookContext} from '../contexts/BookContext'
import {v4 as uuid} from 'uuid'


function Addbook() {

    const [bookname,setBookname] = useState('')
    const [description,setDescription] = useState('')

    const id= uuid();

    const [book,setBook] = useState(
        {
            bookId:id,
            bookName:bookname,
            bookDesc:description,
            bookImage:''
        })

    useEffect(()=>{
        setBook({
            bookId:id,
            bookName:bookname,
            bookDesc:description,
            bookImage:''
        })
    },[bookname,description])
    

    const {theme} = useContext(ThemeContext);
    const themeActive = theme.isLightTheme ? theme.light : theme.dark
    const {addBook} = useContext(BookContext);

    return (
        <div className='add-book'>
            
            <input type='text' placeholder='Book Name' value={bookname} onChange={(e) => setBookname(e.target.value)} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}} />
            <textarea type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}} />
            <button value='Login' onClick={() => addBook(book)} style = {{color: themeActive.syntax , background: themeActive.ui , border: `1px solid ${themeActive.syntax}`}}>Add</button>


        </div>
    )
}

export default Addbook 
