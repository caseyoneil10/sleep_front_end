import React, { useState, useEffect } from 'react'

const Add = (props) => {

	let emptySleep = {name: '', age: '', notes: '', date: '', hoursSlept: '', routine: '', sleepQuality: '', username: ''}
		const [sleep, setSleep] = useState(emptySleep)

	const handleChange = (event) => {
		setSleep({...sleep, [event.target.name]: event.target.value})
		}

	const handleSubmit = (event) => {
			event.preventDefault()
			props.handleCreate(sleep)
			setSleep({name: '', age: '', date: '', hoursSlept: '', routine: '', sleepQuality: '', notes: '', username: props.user.username})
	}
		return (
			<form onSubmit={handleSubmit}>
				<input placeholder="Name" type="text" value={sleep.name} name="name" onChange={handleChange}></input>
				<input placeholder="Age" type="number" value={sleep.age} name="age" onChange={handleChange}></input>
				<input placeholder="Date" type="date" value={sleep.date} name="date" onChange={handleChange}></input>
				<input placeholder="Hours Slept" type="number" value={sleep.hoursSlept} name="hoursSlept" onChange={handleChange}></input>
				<input placeholder="Routine" type="text" value={sleep.routine} name="routine" onChange={handleChange}></input>
				<input placeholder="Quality of Sleep" type="number" value={sleep.sleepQuality} name="sleepQuality" onChange={handleChange}></input>
				<input placeholder="Notes" type="text" value={sleep.notes} name="notes" onChange={handleChange}></input>
				<input type="submit"></input>
			</form>
		)
}

export default Add
