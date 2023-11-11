import './Todo.css';

function Todo() {
    return (
        <div className="cover-todo-container" id="todo">
            <img src="/background2.jpg" alt="background image" class="h-100 w-100 position-absolute z-n1" />
            <h1 className="text-center text-white">Todo List</h1> 
            <div className="row w-50">
                <div className="col-12 d-flex">
                    <div className="form-floating form-floating-lg flex-grow-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="note" />
                        <label for="floatingInput">Note</label>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg ms-2">Add</button>
                </div>
                <div className="col-12 py-5">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;