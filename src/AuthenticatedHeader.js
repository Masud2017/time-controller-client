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

const AuthenticatedHeader = ()=> {
	const history = useHistory();

    const logout = ()=> {
        localStorage.clear();
        window.location.reload();
    }



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



     var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
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
    });
	return (
			<div>
				<Router>
                        <ul type = "none" className = "nav-bar">
                                <div>
                                    <img alt = "something went wong" id = "image" className="nav-image"/>

                                    <li className = "nav-item"><Link to ="/" className = "nav-link">Home</Link></li>
                                    <li className = "nav-item"><Link to ="/login" className = "nav-link">Login</Link></li>
                                    <li className = "nav-item"><Link to ="/signup" className = "nav-link">Signup</Link></li>
                                    <li className = "nav-item"><Link onClick={logout} className = "nav-link">Logout</Link></li>

                                </div>
                        </ul>
                                <Switch>
                                    <Route exact path="/">
                                        <p>Hello home</p>
                                    </Route>

                                    <Route path="/login">
                                        <p>Hello login</p>
                                    </Route>
                                    <Route path="/signup">
                                        <p>Hello signup</p>
                                    </Route>
                                    
                                </Switch>
                    </Router>

                    <div className = "content-center">
                        <button className = "add-task-btn" onClick={openModal}>Add task</button>

                         <Modal
                              isOpen={modalIsOpen}
                              onAfterOpen={afterOpenModal}
                              onRequestClose={closeModal}
                              style={customStyles}
                              contentLabel="Example Modal"
                         >

                          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add your Task</h2>
                          <button onClick={closeModal} className = "regular-btn">close</button>
                          
                          <form>
                            <input type = "text" name = "Name" placeholder = "Task name" className = ""/>
                          </form>
                        </Modal>
                    </div>
                    <NoTask/>
			</div>
		);
}

export default AuthenticatedHeader;