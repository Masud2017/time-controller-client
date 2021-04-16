import "./NormalBody.css";
import axios from "axios";

const NormalBody = ()=> {
	const getUserData = ()=> {
		//	localStorage.clear();

			// alert(localStorage.getItem("token"));
			var token = localStorage.getItem("token");
			if (!localStorage.getItem("token")) {
				console.log("You are not authenticated");
			} else {
				console.log(token);
			}

			// axios.get("http://localhost:4444/api/v1/user",{headers:{Authorization:token}},{withCredentials:true}).then(res=>{console.log(res)}).catch(err=>console.log(err));
	}
	getUserData();
	return (

			<div>
				<div>
				 	<p className = "hello-greeting">This is the home page </p>
				 	<p id = "token"></p>
				</div>
			</div>
		);
}

export default NormalBody;