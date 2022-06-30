import React, { useState, useEffect } from 'react'
import '../index.css';
const NewUser = (props) => {

	let emptyUser = {username: '', password: '', name: '', age: ''}
		const [user, setUser] = useState(emptyUser)

	const handleChange = (event) => {
		setUser({...user, [event.target.name]: event.target.value})
		}

	const handleSubmit = (event) => {
			event.preventDefault()
			props.handleNewUser(user)
			setUser({username: '', password: '', name: '', age: ''})
	}


	return (
		<div className='container newUser'>
			<form onSubmit={handleSubmit}>
				<input className='button newUserButton' placeholder="New Username" type="text" value={user.username} name="username" onChange={handleChange}></input>
				<input className='button newUserButton' placeholder="New Password" type="password" value={user.password} name="password" onChange={handleChange}></input>
				<input className='button newUserButton' placeholder="Name" type="text" value={user.name} name="name" onChange={handleChange}></input>
				<input className='button newUserButton' placeholder="Age" type="number" value={user.age} name="age" onChange={handleChange}></input>
				<br/>
				<input className='newUserSubmit' type="submit"></input>
			</form>
		</div>

	)
}

export default NewUser
