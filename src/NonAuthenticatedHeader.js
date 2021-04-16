import Signup from "./Signup";
import axios from "axios";
import NormalBody from "./NormalBody";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NonAuthenticatedHeader = ()=> {
	return (
			<div>
                
                    <Router>
                        <ul type = "none" className = "nav-bar">
                        <img src = "https://i.pinimg.com/564x/17/91/0e/17910e66808b8c602b812a7a21a673f1.jpg" className = "nav-image"></img>
                                <div>
                                    <li className = "nav-item"><Link to ="/" className = "nav-link">Home</Link></li>
                                    <li className = "nav-item"><Link to ="/login" className = "nav-link">Login</Link></li>
                                    <li className = "nav-item"><Link to ="/signup" className = "nav-link">Signup</Link></li>
                                </div>
                        </ul>
                                <Switch>
                                    <Route exact path="/">
                                        <NormalBody/>
                                    </Route>

                                    <Route path="/login">
                                        <Login/>
                                    </Route>
                                    <Route path="/signup">
                                        <Signup/>
                                    </Route>
                                </Switch>
                    </Router>
            </div>
		);
}

export default NonAuthenticatedHeader;