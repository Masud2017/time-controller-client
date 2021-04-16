import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Login from "./Login";
import NonAuthenticatedHeader from "./NonAuthenticatedHeader";
import AutheOrNot from "./AtuheOrNot";

import "./Header.css";
const Header = ()=> {
    return (
        <div>
            <AutheOrNot/>
        </div>
    );
}

export default Header