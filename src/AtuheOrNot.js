import NonAuthenticatedHeader from "./NonAuthenticatedHeader";
import AuthenticatedHeader from "./AuthenticatedHeader";

const AutheOrNot = ()=> {
	var token = localStorage.getItem("token");
	if (!token) {
		return <NonAuthenticatedHeader/>
	} else {
		return <AuthenticatedHeader/>;
	}
}

export default AutheOrNot;