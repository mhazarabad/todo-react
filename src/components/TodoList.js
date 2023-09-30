import { useNavigate } from "react-router-dom";
import '../statics/TodoList.css';
import { useState } from 'react';


const removeToast = function (toast) { 
	toast.classList.add("hide")
	if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
	setTimeout(() => toast.remove(), 500) // Removing the toast after 500ms
}

const createToast = function (id,custome_text) { 
	const toastDetails = {
		timer: 5000,
		success: {
			icon: "fa-circle-check",
			text: custome_text
		},
		error: {
			icon: "fa-circle-xmark",
			text: custome_text
		},
		warning: {
			icon: "fa-circle-exclamation",
			text: custome_text
		},
		info: {
			icon: "fa-circle-info",
			text: custome_text
		}
	}
	// Getting the icon and text for the toast based on the id passed
	const { icon, text } = toastDetails[id];
	const toast = document.createElement("li"); // Creating a new 'li' element for the toast
	toast.className = `toast ${id}` // Setting the classes for the toast
	// Setting the inner HTML for the toast
	toast.innerHTML = `<div class="column">
												<i class="fa-solid ${icon}"></i>
												<span>${text}</span>
										</div>
										<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
	document.querySelector(".notifications").appendChild(toast); // Append the toast to the notification ul
	// Setting a timeout to remove the toast after the specified duration
	toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}

const TodoList = () => {

    const [todoList, setTodoList] = useState([
        { name: "todo 1 name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name", status: "todo", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 1 },
        { name: "todo 2", status: "inprogress", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 2 },
        { name: "todo 3", status: "done", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 3 },
        { name: "todo 4", status: "done", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 4 },
    ]);

    const DeleteTodoHandler = (todo_id) => {
        setTodoList(todoList.filter(todo => todo.id !== todo_id))
        createToast('success','todo deleted successfuly');
    }


    const navigate = useNavigate();
    const goRouteId = (todo_id) => {
        navigate(`/todo/${todo_id}/`);
    }

    return (
        <div className="todoList">
            <div className="list-holder">
                {/* <h2 className="no-item">No item to show</h2> */}
                <div className="card">

                    <table className='todo-list-holder'>
                        <thead>
                            <tr>
                                <th style={{ width: "40%" }}>name</th>
                                <th style={{ width: "10%" }}>status</th>
                                <th style={{ width: "20%" }}>start date</th>
                                <th style={{ width: "20%" }}>end date</th>
                                <th style={{ width: "10%" }}>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((todo) => (
                                <tr key={todo.id}>
                                    <td style={{ width: "40%" }}><p className="todo-name">{todo.name}</p></td>
                                    <td style={{ width: "10%" }}><span className="todo-status">{todo.status}</span></td>
                                    <td style={{ width: "20%" }}><span className="due-date">{todo.start_date}</span></td>
                                    <td style={{ width: "20%" }}><span className="start-date">{todo.end_date}</span></td>
                                    <td style={{ paddingRight: "10px", width: "10%" }}>
                                        <svg onClick={() => goRouteId(todo.id)} className='edit scale' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L17.5625 10.3304M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <svg onClick={() => DeleteTodoHandler(todo.id)} className='delete scale' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default TodoList;



