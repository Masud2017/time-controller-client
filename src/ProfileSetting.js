import {useState,useEffect,useRef} from "react";
import axios from "axios";

const ProfileSetting = ()=> {
	const [image,setImage] = useState(0);

	const submitFormData = (event)=> {
		event.preventDefault();
		var data = new FormData();
		data.set("profileImage",image);
		alert(image);
		axios.post("http://localhost:4444/api/v1/profile-image",data,{headers:{
			"Authorization":"Bearer "+localStorage.getItem("token"),
			'Content-Type': 'multipart/form-data' // do not forget this 
		}})

	}



	return (
			<div>
				<form onSubmit = {submitFormData} >
					<input type = "file" onChange = {(event)=> {setImage(event.target.files[0])}} name = "image"/><br/><br/>
					<input type = "submit" className = "btn-danger" value = "Change"/>
				</form>
			</div>
		);
}

export default ProfileSetting;