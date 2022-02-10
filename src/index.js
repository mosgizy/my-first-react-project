import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';
import './index.css';
import {BookDetails} from './Books'

const BookList = () => {
  return (
    <section className='booklist'>
      {
        BookDetails.map((book) => {
          return <Book key={book.id} {...book}/>
        })
      }
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))