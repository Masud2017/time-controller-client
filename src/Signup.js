import {useState,setState} from 'react';
import './Login.css';
import Header from './Header';

//import {axios} from "./ax";
import axios from "axios";

const Signup = ()=> {
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [password,setPassword] = useState("");

    const submitForm = async (event)=> {
        event.preventDefault();

        fetch("https://www.googleapis.com/youtube/v3/channels?id=UCyQSAi4Xh5ZQKpMPLEUPSrA&key=AIzaSyBYzmjpQYOb15ueTx3-Y2QcgI8_21Xlhr0&part=snippet,statistics&fields=items(id,snippet,statistics)").then(res=>res.json()).then(response=>console.log(alert(response.items[0].snippet.title)));


        const res = await axios.post("http://localhost:4444/api/v1/registration",{
            "first_name":firstName,
            "second_name":secondName,
            "password": password,
            "email": email
        },{withCredentials:false}).catch(err=>console.log("This is the error msg : "+err));
        alert(email+" "+password+" "+firstName+" "+secondName+" ");

    }


    return (
        <div>
            <div>
                <form action="#" method ="post" className="form-design form-controll content-center" onSubmit={submitForm}>
                    <img src = "https://i.pinimg.com/564x/17/91/0e/17910e66808b8c602b812a7a21a673f1.jpg" alt="some thing went wrong" className="login-signup-logo mb-lg-4"/><br/>
                    <label for="first-name" className="text-font-design">Enter your first name: </label><br/>
                    <input onChange={(event)=>setFirstName(event.target.value)} type = "text" placeholder = "Enter your first name" name = "first-name" className="form-controll"/><br/>

                    <label for="second-name" className="text-font-design">Enter your second name: </label><br/>
                    <input onChange={(event)=>setSecondName(event.target.value)} type = "text" placeholder = "Enter your second name" name = "second-name" className="form-controll"/><br/>

                    <label for="password" className="text-font-design">Enter your password: </label><br/>
                    <input onChange={(event)=>setPassword(event.target.value)} type = "password" placeholder="Enter your password" name = "password" className="form-controll"/><br/>

                    <label for="email" className="text-font-design">Enter your email: </label><br/>
                    <input onChange={(event)=>setEmail(event.target.value)} type = "email" placeholder="Enter your email" name = "email" className="form-controll"/><br/>

                    <button className="form-controll mt-sm-4 btn-danger">Signup</button>
                    <br/><a href= "/login">Already have account?</a>

                </form>
            </div>
        </div>
    );
}
export default Signup;