import React, { useState } from 'react';
 
function TodoList() {
  const [todos, setTodos] = useState(['Your first todo list']);
  const [inputValue, setInputValue] = useState('');
 
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    } else {
      alert('Sorry! input can not be empty');
    }
  };
 
  return (
    <>
      <section className="p-3">
        <div className="container">
          <div className="card shadow-sm p-4">
            <div className="card-body">
              <h2 className="text-primary text-center fw-semibold mb-4">Todo List</h2>
 
              <div className="mb-3">
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your todo item"
                  type="text"
                  value={inputValue}
                  className="form-control"
                />
              </div>
              <button onClick={addItem} className="btn btn-info w-100 mb-3">
                Add new list
              </button>
              <ul className="list-group">
                {todos.map((todo, index) => (
                  <li key={index} className="list-group-item">
                    {todo}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default TodoList;