import "./NoTask.css";
import list from "./TodoListEntity";
import axios from "axios";
import {useState} from "react";
import "./Task.css";
import {formatTimeLeft,startTime,remainingPathColor} from "./timerUtil/timer";

const Task = ()=> {
	var [list,setList] = useState(null);
	var isTodoListAvailable = false;

	// backup data section is here
	var [nameFile,setNameFile] = useState(null);
	var [description,setDescription] = useState(null);
	var [done, setDone] = useState(null);
	var [duration,setDuration] = useState(null);
	var [date, setDate] = useState(null);
	// backup data section is ended

	// sendable data is here
	var [nameFileSendable,setNameFileSendable] = useState(null);
	var [descriptionSendable,setDescriptionSendable] = useState(null);
	var [doneSendable, setDoneSendable] = useState(null);
	var [durationSendable,setDurationSendable] = useState(null);
	var [dateSendable, setDateSendable] = useState(null);
	// sendable data is ended

	const fetchTask = async ()=> {
		const res = await axios.get("http://localhost:4444/api/v1/todo/todo0",{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
		.catch(err=>console.log(err));
		const resData = res.data._embedded.todoModels;
		console.log(resData[0].description);
		setList(resData);

		if (res.status == 200) {
			isTodoListAvailable = true;
			alert("OK");
		} else {
			isTodoListAvailable = false;
		}
	}

	document.addEventListener("readystatechange",event=> {
		if (event.target.readyState == "complete") {
			fetchTask();
		}
	});

	const deleteTodo = (item) => {
		alert("deleteing the data");
		alert(item.id);
		axios.delete("http://localhost:4444/api/v1/todo/todo0/"+item.id,{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}});

		window.location.reload();
	}

	const submitEditBtn = (item,nameFileSendable,descriptionSendable,durationSendable,doneSendable,dateSendable)=>{
		axios.put("http://localhost:4444/api/v1/todo/todo0/"+item.id,{
			"nameFile":nameFileSendable,
			"description":descriptionSendable,
			"duration":durationSendable,
			"done":doneSendable,
			"date":dateSendable
		},{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}).
		catch(error=>console.log(error));
	}

	const editBtn = (item)=> {
		setNameFile(document.getElementById("todo-header"+item.id).innerHTML);
		setDescription(document.getElementById("todo-body"+item.id).innerHTML);
		setDone(document.getElementById("todo-status"+item.id).innerHTML);
		setDuration(document.getElementById("todo-duration"+item.id).innerHTML);
		setDate(document.getElementById("todo-date"+item.id).innerHTML);

		document.getElementById("todo-header"+item.id).contentEditable = true;
		document.getElementById("todo-body"+item.id).contentEditable = true;
		document.getElementById("todo-duration"+item.id).contentEditable = true;
		document.getElementById("todo-status"+item.id).contentEditable = true;
		document.getElementById("todo-date"+item.id).contentEditable = true;

		document.getElementById("save-btn"+item.id).style.display = "block";
		document.getElementById("edit-btn"+item.id).style.display = "none";
		document.getElementById("cancel-btn"+item.id).style.display = "block";
	}

	const saveBtn = (item)=> {
		document.getElementById("todo-header"+item.id).contentEditable = false;
		document.getElementById("todo-body"+item.id).contentEditable = false;
		document.getElementById("todo-duration"+item.id).contentEditable = false;
		document.getElementById("todo-status"+item.id).contentEditable = false;
		document.getElementById("todo-date"+item.id).contentEditable = false;

		document.getElementById("cancel-btn"+item.id).style.display = "none";
		document.getElementById("edit-btn"+item.id).style.display = "block";
		document.getElementById("save-btn"+item.id).style.display = "none";

		setNameFileSendable(document.getElementById("todo-header"+item.id).innerHTML);
		setDescriptionSendable(document.getElementById("todo-body"+item.id).innerHTML);
		setDoneSendable(document.getElementById("todo-status"+item.id).innerHTML);
		setDurationSendable(document.getElementById("todo-duration"+item.id).innerHTML);
		setDateSendable(document.getElementById("todo-date"+item.id).innerHTML);

		alert(nameFileSendable);
		// now let's send these value to the server;
		axios.put("http://localhost:4444/api/v1/todo/todo0/"+item.id,{
			"nameFile":nameFileSendable,
			"description":descriptionSendable,
			"duration":durationSendable,
			"done":doneSendable,
			"date":dateSendable
		},{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}).
		catch(error=>console.log(error));

		// submitEditBtn(item,nameFileSendable,descriptionSendable,durationSendable,doneSendable,dateSendable);
	}

	const cancleBtn = (item)=> {
		document.getElementById("todo-header"+item.id).contentEditable = false;
		document.getElementById("todo-body"+item.id).contentEditable = false;
		document.getElementById("todo-duration"+item.id).contentEditable = false;
		document.getElementById("todo-status"+item.id).contentEditable = false;
		document.getElementById("todo-date"+item.id).contentEditable = false;

		document.getElementById("todo-header"+item.id).innerHTML = nameFile;
		document.getElementById("todo-body"+item.id).innerHTML = description;
		document.getElementById("todo-duration"+item.id).innerHTML = duration;
		document.getElementById("todo-status"+item.id).innerHTML = done;
		document.getElementById("todo-date"+item.id).innerHTML = date;

		document.getElementById("save-btn"+item.id).style.display = "none";
		document.getElementById("edit-btn"+item.id).style.display = "block";
		document.getElementById("cancel-btn"+item.id).style.display = "none";

	}
//<text x = "28" y = "56" fill = "red">20:50</text>
	const stopWatch = (item)=> {
		document.getElementById("stop-watch"+item.id).innerHTML = `
			<div style = "position:relative;height:300px;width:300px">
				<svg style = "transform: scaleX(-1);" viewBox="0 0 100 100">
					<g style = "fill:none;stroke:none">
						<circle cx="50" cy="50" r="45" style = "stroke:grey;stroke-width:7"></circle>
						<path
							id="base-timer-path-remaining"
							stroke-dasharray="283 283"
							class = "base-timer__path-remaining ${remainingPathColor}"
								d="
								M 50, 50
								m -45, 0
								a 45,45 0 1,0 90,0
								a 45,45 0 1,0 -90,0
								"
						></path>
					</g>
				</svg>
				<span id = "timeLeft" style = "position:absolute;width:300px;height:300px;top:0;display:flex;align-items:center;justify-content:center;font-size:48px;">
					${formatTimeLeft(item.duration)}
				</span>
			</div>
		`;
	}

	if (list == null) {
		
			return (
			<div>
				<div className = "center-content"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBstErU-022KsODZUPnDjEoMliU03LtwrQg&usqp=CAU" alt = "Something went wrong"/><br/><br/></div>
				<div className = "center-content"><h4>Stop first add some task.<br/>You don't have any task yet</h4></div>
				
			</div>
		);

	} else {
		return (
				<div>
					{
						list.map(item=> (
							<div class = "task-container">
								<div id = "test"></div>
								<div className = "grid-container">
									<div className = "todo-header" id = {"todo-header"+item.id}>{item.nameFile}</div>
									<div className = "grid-item-remove"><button type = "button" className = "close-button" onClick = {(event)=>deleteTodo(item)}>X</button></div>
								</div>
								<div className = "todo-body" id = {"todo-body"+item.id}>{item.description}</div>

								
								<div class = "todo-duration duration-grid" id = {"todo-duration"+item.id}>
									{item.duration}
									<button type = "button" onClick = {(event)=>stopWatch(item)} className = "stopwatch-btn">Stopwatch</button>
									<div id = {"stop-watch"+item.id}></div>
									<button type = "button" onClick = {startTime}>Start time</button>
								</div>
								<div class = "todo-status" id = {"todo-status"+item.id}>{item.done}</div>
								<div class = "todo-date" id = {"todo-date"+item.id}>{item.date}</div>
								<button type = "button" className = "save-btn" id = {"save-btn"+item.id} onClick = {(event)=>saveBtn(item)}>Save</button>
								<button type = "button" id={"edit-btn"+item.id} className = "edit-btn" onClick = {(event)=>editBtn(item)}>Edit</button>
								<button type = "button" id={"cancel-btn"+item.id} className = "cancle-btn" onClick = {(event)=>cancleBtn(item)}>Cancel</button>
								
							</div>
						))
					}
                    
				</div>
			);
	}
}

export default Task;