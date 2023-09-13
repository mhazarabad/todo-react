import { useParams } from "react-router-dom";
import "../statics/TodoDetail.css";



const TodoDetail = () => {

    const { todo_id } = useParams();

    const todoList=[
        { name: "todo 1 name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name name", description:"test descrition", status: "todo", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 1 },
        { name: "todo 2", status: "inprogress", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 2 },
        { name: "todo 3", status: "done", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 3 },
        { name: "todo 4", status: "done", start_date: "20/10/2023 15:17:10 utc", end_date: "20/11/2023 15:17:10 utc", id: 4 },
    ]

    const todo_object=todoList.filter(todo => todo.id === parseInt(todo_id))[0];

    const datetime_formater = (datetime) => {
        
        let splited_datetime=datetime.split(' ');
        let date=splited_datetime[0].split('/');// [D,M,Y]
        let day=date[0];
        let month=date[1];
        let year=date[2];
        if (parseInt(day)<10) day = '0'+day;
        if (parseInt(month)<10) month = '0'+month;
        date=[year,month,day]
        date=date.join('-');
        let time=splited_datetime[1].split(':');
        let hour=time[0];
        let minute=time[1];
        if (parseInt(hour)<10) hour = '0'+hour;
        if (parseInt(minute)<10) minute = '0'+minute;
        time=[hour,minute];
        time=time.join(':');
        console.log(date+'T'+time);
        return date+'T'+time
    };
    

    return (
        <div className="todo-detail">
            <div className="content" key={todo_object.id}>
            <div className="content-holder">
                <input type="text" placeholder='name:' defaultValue={todo_object.name}/>
            </div>
            <div className="content-holder">
                <textarea cols="30" rows="10" placeholder='optional:' defaultValue={todo_object.description}></textarea>
            </div>

            <div className="content-holder">
                <input type="datetime-local" placeholder='optional:' defaultValue={datetime_formater(todo_object.start_date)}/>
            </div>
            <div className="content-holder">
                <input type="datetime-local" placeholder='optional:' defaultValue={datetime_formater(todo_object.end_date)}/>
            </div>
            <div className="content-holder">
                <select defaultValue={todo_object.status}>
                    <option value="todo">todo</option>
                    <option value="inprogress">in-progress</option>
                    <option value="done">done</option>
                </select>
            </div>

            <div className="content-holder" style={{ direction: "rtl" }}>
                <button className='add__btn'>Save</button>
            </div>
        </div>
        </div>
    );
}

export default TodoDetail;