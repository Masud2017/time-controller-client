
import "./NoTask.css";
import list from "./TodoListEntity";
import axios from "axios";
import {useState} from "react";

const Task = ()=> {
	const [list,setList] = useState(null);

	const fetchTask = async ()=> {
		const res = await axios.get("http://localhost:4444/api/v1/todo/todo0",{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
		.catch(err=>console.log(err));
		const resData = res.data._embedded.todoModels;
		setList(resData[0]);
	}
	const dd = false;
	fetchTask();
	

	if (list == null) {
			return (
			<div>
				<div className = "center-content"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBstErU-022KsODZUPnDjEoMliU03LtwrQg&usqp=CAU" alt = "Something went wrong"/><br/><br/></div>
				<div className = "center-content"><h4>Stop first add some task.<br/>You don't have any task yet</h4></div>
				<button type = "button" onClick = {fetchTask}> Click </button>
			</div>
		);

	} else {
		// console.log(list)
		return (
				<div>
					This is task momo
					
				</div>
			);
	}
}

export default Task;