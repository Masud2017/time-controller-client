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


const Login = (props)=> {
    const [email,setEmail] = useState(""); // testing 
    const [password,setPassword] = useState(""); // testing 

    var bodyFormData = new FormData();
    bodyFormData.append("email",email);
    bodyFormData.append("password",password);
   
    const submitForm = (event)=> {
        var proxyUrl = "http://localhost:4444";
        var uri = "/api/v1/authenticate";

        var requestJson = {
            method:"post",
            url:proxyUrl+uri,
            data : {
                "email":email,
                "password":password
            }
            ,
            headers: {
                "Access-Control-Allow-Origin":"*",
                "Content-Type":"application/json",
            },
            Vary:'Origin'
            
        };

        //var proxyUrl = "https://www.googleapis.com";
        //var url = "/youtube/v3/channels?id=UCyQSAi4Xh5ZQKpMPLEUPSrA&key=AIzaSyBYzmjpQYOb15ueTx3-Y2QcgI8_21Xlhr0&part=snippet,statistics&fields=items(id,snippet,statistics)";
       // axios.post(requestJson)

        axios(requestJson).then(res=>alert(res.data)).catch (err=>console.log("Error : "+err));
        /*axios.post("localhost:4444/api/v1/authenticate",{},{
            auth:{"email":"msmasud578@gmail.com",
            "password":"jpmasudxp"
        }}).then(res=>alert(res.data)); */
        //axios.get(proxyUrl+url,{headers:{"Access-Control-Allow-Origin": "*","Content-Type":"application/json","Pojo":"papa"}},{"Vary":"Origin"}).then(res=>alert(res.data)).catch(err=>console.log(err),{withCredentials:true});
        event.preventDefault();
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