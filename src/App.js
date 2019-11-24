import React from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'
import CopyContainer from './CopyContainer'
import HeaderContainer from './HeaderContainer'

class App extends React.Component {
	constructor(){
		super()

		this.state = {
    		loggedin: false,
    		loggedInUsername: null
    	}
	}
	login = async (loginInfo) => {
		console.log("\nThis is loginInfo", loginInfo);
		const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(loginInfo),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedLoginResponse = await response.json()
		console.log(parsedLoginResponse);
		if(parsedLoginResponse.status.code === 200) {
			this.setState({
				loggedin: true,
				loggedInUsername: parsedLoginResponse.data.username
			})
			console.log("\nThis is this.state.loggedInUsername");
			console.log(this.state.loggedInUsername);
		} else {
			console.log("Login Failed");
			console.log(parsedLoginResponse);
		}
	}
	register = async (loginInfo) => {
		console.log("\nThis is loginInfo");
		const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/register', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(loginInfo),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedLoginResponse = await response.json()
		console.log(parsedLoginResponse);
		if(parsedLoginResponse.status.code === 201) {
			this.setState({
				loggedin: true,
				loggedInUsername: parsedLoginResponse.data.username
			})
		} else {
			console.log("Register Failed");
			console.log(parsedLoginResponse);
		}
	}
	logout = async () => {
		const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/logout', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.setState({
			loggedin: false,
			loggedInUsername: null
		})
	}
	render(){
		return(
			<div className="App">
				<HeaderContainer loggedin={this.state.loggedin} loggedInUsername={this.state.loggedInUsername} logout={this.logout}/>
				{ this.state.loggedin ? <CopyContainer /> : <LoginRegisterForm login={this.login} register={this.register} />}
			</div>
		)
	}
}

export default App;
