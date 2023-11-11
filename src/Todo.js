import { useState } from 'react';
import './Todo.css';

function Todo() {
    const [notes, setNotes] = useState([
        { id: 1, note: 'Note 1' },
        { id: 2, note: 'Note 2' },
        { id: 3, note: 'Note 3' },
    ]);

    const [note, setNote] = useState('');

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    }

    const handleAdd = () => {
        if (note !== '') {
            setNotes([...notes, { id: notes.length + 1, note: note }]);
            setNote('');
        }
    }

    return (
        <div className="cover-todo-container" id="todo">
            <img src="/background2.jpg" alt="background image" class="h-100 w-100 position-absolute z-n1" />
            <h1 className="text-center text-white">Todo List</h1>
            <div className="row w-50">
                <div className="col-12 d-flex">
                    <div className="form-floating form-floating-lg flex-grow-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="note" value={note} onChange={(e) => setNote(e.target.value)} />
                        <label for="floatingInput">Note</label>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg ms-2" onClick={handleAdd}>Add</button>
                </div>
                <div className="col-12 py-5">
                    <ul className="list-group">
                        {notes.map((note) => (
                            <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {note.note}
                                <div>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(note.id)}>Delete</button>
                                    {/* TODO: Implement update function */}
                                    {/* <button type="button" className="btn btn-warning btn-sm" onClick={() => handleUpdate(note.id)}>Update</button> */}
                                </div>
                            </li>
                        ))}
                        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                            Note 1
                            <div>
                            <button type="button" className="btn btn-danger btn-sm me-2">Delete</button>
                            <button type="button" className="btn btn-warning btn-sm">Update</button>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Note 2
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Note 3
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;