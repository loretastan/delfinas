import { useContext, useState } from 'react';
import { Authors } from '../../Contexts/Authors';


export default function Edit() {

    const { editAuthor, setEditAuthor, setUpdateAuthor } = useContext(Authors);

    const [inputs, setInputs] = useState({ ...editAuthor, born: editAuthor.born.split('T')[0] });

    // useEffect(_ => {
    //     console.log('MOUNT edit');
    //     return _ => console.log('UNMOUNT edit');
    // }, []);

    console.log('editAuthor', editAuthor);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const submit = _ => {
        setUpdateAuthor({ ...editAuthor, ...inputs });
        setEditAuthor(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm delete</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditAuthor(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname</label>
                            <input type="text" className="form-control" id="surname" value={inputs.surname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nickname" className="form-label">Nickname</label>
                            <input type="text" className="form-control" id="nickname" value={inputs.nickname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="born" className="form-label">Born</label>
                            <input type="date" className="form-control" id="born" value={inputs.born} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setEditAuthor(null)}>Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}