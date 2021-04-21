import "./Setting.css";
import ProfileSetting from "./ProfileSetting";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const Setting = ()=> {
	return (
			<div className = "container-grid">
			<Router>
				<div>
					<ul className = "setting-list">
						<Link to = "/profile"><li className = "setting-item">Profile</li></Link>
						<li className = "setting-item">Profile</li>
					</ul>
				</div>
				<Switch>
					<Route exact path="/profile">
                    	<ProfileSetting/>
                    </Route>
				</Switch>

			</Router>
			</div>
			
		);
}

export default Setting;