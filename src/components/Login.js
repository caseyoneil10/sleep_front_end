import React, { useState, useEffect } from 'react'

const Login = (props) => {
	let emptyUser = {username: '', password: ''}
	const [user, setUser] = useState(emptyUser)

	const handleChange = (event) => {
		setUser({...user, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleLogin(user)
		setUser({username: '', password: ''})
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<input className="button" placeholder="Username" type="text" name="username" value={user.username} onChange={handleChange}></input>
				<input className="button" placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange}></input>
				<br/>
				<input type="submit"></input>
			</form>
		</div>
	)
}



export default Login
