import '../statics/AddTodoModal.css';
// import { useState } from 'react';

const AddTodoModal = (props) => {

    let class_name = props.show ? "popup show" : "popup  ";

    return (
        <div id='add-todo-modal-popup' className="add-todo-modal">
            <div className={class_name}>
                <header>
                    <span>Add Todo</span>
                    <div className="close" onClick={() => props.setModal(false)}>
                        <i>X</i>
                    </div>
                </header>
                <div className="content">
                    <div className="content-holder">
                        <input type="text" id="todo-name" placeholder='name:' />
                    </div>
                    <div className="content-holder">
                        <textarea id="todo-description" cols="30" rows="10" placeholder='optional:'></textarea>
                    </div>

                    <div className="content-holder">
                        <input type="datetime-local" id="todo-start-datetime" placeholder='optional:' />
                    </div>
                    <div className="content-holder">
                        <input type="datetime-local" id="todo-due-datetime" placeholder='optional:' />
                    </div>
                    <div className="content-holder">
                        <select id="todo-status">
                            <option value="0">todo</option>
                            <option value="1">in-progress</option>
                            <option value="2">done</option>
                        </select>
                    </div>

                    <div className="content-holder" style={{ direction: "rtl" }}>
                        <button onClick={() => props.setModal(false)} className='cancel__btn'>Cancel</button>
                        <button className='add__btn'>Add</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddTodoModal;


