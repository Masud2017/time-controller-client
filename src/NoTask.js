import "./NoTask.css";

const Task = ()=> {
	const dd = true;
	if (dd) {
		return (
				<div>This is the task list</div>
			);

	} else {
		return (
			<div>
				<div className = "center-content"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBstErU-022KsODZUPnDjEoMliU03LtwrQg&usqp=CAU" alt = "Something went wrong"/><br/><br/></div>
				<div className = "center-content"><h4>Stop first add some task.<br/>You don't have any task yet</h4></div>
			</div>
		);
	}
}

export default Task;