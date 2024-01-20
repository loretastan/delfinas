import { useContext } from 'react';
import { BooksData } from './BooksData';

export default function Book({ book }) {

    const { types } = useContext(BooksData);

    const type = types?.find(type => type.id === book.type)?.title;

    return (

        <div className="book">
            <div className="book__cat">{type}</div>
            <div className="book__title">{book.title}</div>
            <div className="book__image"><img src={book.img} alt={book.title}></img></div>
            <div className="book__author">{book.author}</div>
            <div className="book__price">{book.price} EUR</div>
        </div>

    );

}