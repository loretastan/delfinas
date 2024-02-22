import { useContext, useState } from 'react';
import { Heroes } from '../../Contexts/Heroes';
import useBooksDropdown from '../../Hooks/useBooksDropdown';

const defaultInputs = {
    name: '',
    good: 1,
    book_id: '',
};

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const { booksDropdown } = useBooksDropdown();

    const { setStoreHero } = useContext(Heroes);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const create = _ => {
        const author = {
            surname: booksDropdown.find(book => book.id === +inputs.book_id).surname,
            name: booksDropdown.find(book => book.id === +inputs.book_id).name
        }
        const book = {
            title: booksDropdown.find(book => book.id === +inputs.book_id).title
        }
        setStoreHero({ ...inputs, author, book });
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h3>Create Hero</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="good" className="form-label">Good/Bad</label>
                    <h5 style={{ cursor: 'pointer', display: inputs.good ? 'block' : 'none' }} onClick={_ => handleChange({ target: { value: 0, id: 'good' } })}>Good</h5>
                    <h5 style={{ cursor: 'pointer', display: inputs.good ? 'none' : 'block' }} onClick={_ => handleChange({ target: { value: 1, id: 'good' } })}>Bad</h5>
                </div>
                {
                    booksDropdown &&
                    <div className="mb-3">
                        <label htmlFor="book_id" className="form-label">Book</label>
                        <select className="form-select" id="book_id" value={inputs.book_id} onChange={handleChange}>
                            <option value="">Select book</option>
                            {
                                booksDropdown.map(book => <option key={book.id} value={book.id}>{book.title}</option>)
                            }
                        </select>
                    </div>
                }
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    );
}