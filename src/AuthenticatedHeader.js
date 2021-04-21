import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";

import Modal from 'react-modal';

import {useState} from "react";

import { useHistory } from 'react-router'

import "./AuthenticatedHeader.css";

import NoTask from "./NoTask";

import Setting from "./Setting";
import AuthenticatedHome from "./AuthenticatedHome";

const AuthenticatedHeader = ()=> {
	const history = useHistory();

    const logout = ()=> {
        localStorage.clear();
        window.location.reload();
    }

    const fetchUser = ()=> {
        axios.get("http://localhost:4444/api/v1/user",{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        .then(res=>{
            res.data._embedded.users.map((user)=>console.log(user.first_name+" "+user.second_name+" password : "+user.password))
        })
        .catch(err=>console.log(err));

        document.getElementById("image").src = `data:image/gif;base64,`+localStorage.getItem("profileImage");
        document.getElementById("image").alt = "Alt just changed";
        // console.log(localStorage.getItem("profileImage"));

                //window.open('data:image/gif;,'+res.data);
                //window.open('data:image/gif;,'+btoa(res.data.replace(/(..)/gim,'%$1')))

                // var image = new Image();
                // image.src = "data:image/gif;base64,"+res.data;
                // var w = window.open("");
                // w.document.write(image.outerHTML);
    }


    const dialogBox = ()=> {
        return (
                <div>
                    <Modal>
                        Hello
                    </Modal>
                </div>

            );
    }



    document.addEventListener("DOMContentLoaded", function(event) { 
        fetchUser();
        axios.get("http://localhost/api/v1/user/4",{headers:{"Authorization": "Bearer "+localStorage.getItem("token")}}).then(res=>{alert(res)}).catch(err=>console.log(err));
        document.getElementById("user-name").innerHTML = localStorage.getItem("name");
    });
	return (
			<div>
				<Router>
                        <ul type = "none" className = "nav-bar">
                                <div>
                                    <img alt = "something went wong" id = "image" className="nav-image"/>
                                    <li className = "nav-item user-name" id = "user-name"></li>
                                    <li className = "nav-item"><Link to ="/" className = "nav-link">Home</Link></li>
                                    <li className = "nav-item"><Link to ="/setting" className = "nav-link">Setting</Link></li>
                                    <li className = "nav-item"><Link onClick={logout} className = "nav-link">Logout</Link></li>

                                </div>
                        </ul>
                                <Switch>
                                    <Route exact path="/">
                                        <AuthenticatedHome/>
                                    </Route>

                                    <Route path="/setting">
                                        <Setting/>
                                    </Route>
                                   
                                    
                                </Switch>
                    </Router>

                    
			</div>
		);
}

export default AuthenticatedHeader;