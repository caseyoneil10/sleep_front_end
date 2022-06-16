import React, { useState, useEffect } from 'react'

const Login = (props) => {
	let emptyUser = {username: '', password: ''}
	const [user, setUser] = useState(emptyUser)
	const [show, setShow] = useState(false)

	const showLodData = () =>{
		setShow(true)
	}

	const handleChange = (event) => {
		setUser({...user, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleLogin(user)
	}

	const revealInput = () => {
		props.showRecordInput()
	}

	return (

			<form onSubmit={()=>{
				handleSubmit();
				revealInput()
				}}>
				<input placeholder="Username" type="text" name="username" value={user.username} onChange={handleChange}></input>
				<input placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange}></input>
				<input type="submit"></input>
			</form>

	)



}



export default Login
