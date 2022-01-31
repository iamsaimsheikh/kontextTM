import React, {createContext,useState,useEffect} from 'react'
import {v4 as uuid} from 'uuid'

export const BookContext = createContext();


function BookContextProvider(props) {

    const [books,setBooks] = useState([
        {
            bookId:uuid(),
            bookName:'Looking For Alaska',
            bookAuthor:'John Green',
            bookPrice:'$20',
            bookDesc:`Looking for Alaska tells the story of Miles “Pudge” Halter, a high school junior who divides his life into time before and time after a life-changing event that the reader will not discover until later in the novel. Miles plans to attend the Culver Creek boarding school for his junior year of high school.`,
            bookImage:''
        },

        {
            bookId:uuid(),
            bookName:'Fifty Shades of Gray',
            bookAuthor:'E.L James',
            bookPrice:'$12',
            bookDesc:`Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James. It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey.`,
            bookImage:''
        },

        {
            bookId:uuid(),
            bookName:'Harry Potter',
            bookAuthor:'J.K Rowlings',
            bookPrice:'$30',
            bookDesc:`Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.`,
            bookImage:''
        }
    ])

    const addBook = (book) => {
        setBooks([...books,book])
    }

    useEffect(()=>{
        setBooks(books)
    },books)


    return (
        <BookContext.Provider value={{books,addBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
