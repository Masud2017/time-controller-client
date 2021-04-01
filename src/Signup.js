import {useState,setState} from 'react';
import './Login.css';
import Header from './Header';

const submitForm = (event)=> {
    alert(event.target.value.email);
    event.preventDefault();
}
const Signup = ()=> {
    return (
        <div>
            <div>
                <form action="#" method ="post" className="form-design form-controll content-center">
                    <img src = "https://i.pinimg.com/564x/17/91/0e/17910e66808b8c602b812a7a21a673f1.jpg" alt="some thing went wrong" className="login-signup-logo mb-lg-4"/><br/>
                    <label for="first-name" className="text-font-design">Enter your first name: </label><br/>
                    <input type = "text" placeholder = "Enter your first name" name = "first-name" className="form-controll"/><br/>

                    <label for="second-name" className="text-font-design">Enter your second name: </label><br/>
                    <input type = "text" placeholder = "Enter your second name" name = "second-name" className="form-controll"/><br/>

                    <label for="password" className="text-font-design">Enter your password: </label><br/>
                    <input type = "password" placeholder="Enter your password" name = "password" className="form-controll"/><br/>

                    <label for="email" className="text-font-design">Enter your email: </label><br/>
                    <input type = "email" placeholder="Enter your email" name = "email" className="form-controll"/><br/>

                    <button onClick = {submitForm} className="form-controll mt-sm-4 btn-danger">Signup</button>
                    <br/><a href= "/login">Already have account?</a>

                </form>
            </div>
        </div>
    );
}
export default Signup;