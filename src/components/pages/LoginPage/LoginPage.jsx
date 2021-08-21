import './css/loginPage.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import { useState } from 'react';
export default function LoginPage() {

	const [login, setLogin] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginDetails,setLoginDetails] = useState([]);

	var myStorage = window.localStorage;
	
	return (
		<div className = "container" >
			<div className="row">
				<div className="col-md-5 mx-auto">
					{loggedIn ? <Profile /> : (login ? <SignIn login={login} setLogin={setLogin} loginDetails={loginDetails} myStorage={myStorage}></SignIn>
						: <SignUp login={login} setLogin={setLogin} loginDetails={loginDetails} setLoginDetails={setLoginDetails} myStorage={myStorage}></SignUp>)}
				</div>
			</div>
		</div>
	)
};