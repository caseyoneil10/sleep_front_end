import React, { useState, useEffect } from 'react'

const NewUser = (props) => {

	let emptyUser = {username: '', password: ''}
		const [user, setUser] = useState(emptyUser)

	const handleChange = (event) => {
		setUser({...user, [event.target.name]: event.target.value})
		}

	const handleSubmit = (event) => {
			event.preventDefault()
			props.handleNewUser(user)
			setUser({username: '', password: ''})
	}


	return (

			<form onSubmit={handleSubmit}>
				<input placeholder="New Username" type="text" value={user.username} name="username" onChange={handleChange}></input>
				<input placeholder="New Password" type="password" value={user.password} name="password" onChange={handleChange}></input>
				<input type="submit"></input>
			</form>

	)
}

export default NewUser
