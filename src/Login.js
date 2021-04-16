import {useState} from 'react';
import './Login.css';
import Header from './Header';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import axios from "axios";
// import {axios} from "./ax";

const Login = (props)=> {
    const [email,setEmail] = useState(""); // testing 
    const [password,setPassword] = useState(""); // testing 

    // var bodyFormData = new FormData();
    // bodyFormData.append("email",email);
    // bodyFormData.append("password",password);
   
    const submitForm = async (event)=> {
        event.preventDefault();


        const res = await axios.post("http://localhost:4444/api/v1/authenticate",{
            "email":email,
            "password":password
        },{withCredentials:false})
        .catch(err=>console.log(err));

        localStorage.setItem("token",res.data.token);

        const profileImage = await axios.get("http://localhost:4444/api/v1/profile-image",{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}).catch(err=>console.log(err));
        localStorage.setItem("profileImage",profileImage.data);
        //alert("Awaited data "+profileImage.data);
        //alert(localStorage.getItem("profileImage"));

        const authenticatedUserInfo = await axios.get("http://localhost:4444/api/v1/whoami",{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        alert(authenticatedUserInfo.data.name+" Email : "+authenticatedUserInfo.data.email);
        

        window.location.reload();

        // const res2 = axios.get("http://localhost:4444/api/v1/profile-image",{headers:{'Authorization':"Bearer "+localStorage.getItem("token")}}).then(res=>alert(res)).catch(err=>console.log("Sorry image can't be pulled from the server for the reason : "+err));

        // console.log(res2);

    }

    return (
        <div>
            <div className="sweet-loading">
                <form method ="post" className="form-design form-controll content-center" onSubmit = {submitForm}>
                    <img src = "https://i.pinimg.com/564x/17/91/0e/17910e66808b8c602b812a7a21a673f1.jpg" alt="some thing went wrong" className="login-signup-logo mb-lg-4"/><br/>
                    <label for="first-name" className="text-font-design">Enter your email: </label><br/>
                    <input onChange={(event)=>setEmail(event.target.value)} type = "email" placeholder = "Enter your email address" name = "email" className="form-controll" require/><br/>
                    <label for="password" className="text-font-design">Enter your password: </label><br/>
                    <input onChange={(event)=>setPassword(event.target.value)} type = "password" placeholder="Enter your password" name = "password" className="form-controll"/><br/>
                    <input type = "submit" value = "Login" className = "form-controll mt-sm-4 btn-danger"/>
                    <br/><a href= "#" className="mt-sm-4">Forgot password?</a>
                    <br/><a href= "/signup">Don't have account click here to make one</a>
                </form>
            </div>
        </div>
    );
}
export default Login;