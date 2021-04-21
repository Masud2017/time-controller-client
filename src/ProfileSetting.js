import {useState,useEffect} from "react";
import axios from "axios";

const ProfileSetting = ()=> {
	const [image,setImage] = useState("");

	const submitFormData = (event)=> {
		event.preventDefault();
		axios.post("http://localhost:4444/api/v1/profile-image",{headers:{"Authorization":"Bearer"+localStorage.getItem("token")}})
	}

	return (
			<div>
				<form onSubmit = {submitFormData} >
					<input type = "file" onChange = {(event)=> {setImage(event.target.value)}} name = "image"/><br/><br/>
					<input type = "submit" className = "btn-danger" value = "Change"/>
				</form>
			</div>
		);
}

export default ProfileSetting;