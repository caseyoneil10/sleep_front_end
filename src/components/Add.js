import React, { useState, useEffect } from 'react'

const Add = (props) => {

	let emptySleep = {name: '', age: '', notes: '', date: '', hoursSlept: '', routine: '', sleepQuality: '', username: ''}



	const [sleep, setSleep] = useState(emptySleep)

	const handleChange = (event) => {
		setSleep({...sleep, [event.target.name]: event.target.value})

		}

	const handleSubmit = (event) => {
		// console.log(props.user.username);
			event.preventDefault()
			// console.log(sleep);
			sleep.username = props.user.username
			props.handleCreate(sleep)
			setSleep({name: '', age: '', date: '', hoursSlept: '', routine: '', sleepQuality: '', notes: '', username: ''})

	}

		return (
			<form onSubmit={handleSubmit}>
				<input required placeholder="Name" type="text" value={sleep.name} name="name" onChange={handleChange}></input>
				<input required placeholder="Age" type="number" value={sleep.age} name="age" onChange={handleChange}></input>
				<input required placeholder="Date" type="date" value={sleep.date} name="date" onChange={handleChange}></input>
				<input required placeholder="Hours Slept"  type="number" value={sleep.hoursSlept} name="hoursSlept" min="0" max="24" onChange={handleChange}></input>
				<select required name="routine" value={sleep.routine} onChange={handleChange}>
					<option value='select an option'>Select an Option From Below</option>
					<option value='none'>None</option>
					<option value='Exerise Before Bed'>Exerise Before Bed</option>
					<option value='Meditation/Mindfullness'>Meditation/Mindfullness</option>
					<option value='Medication - Perscribed'>Medication - Perscribed</option>
					<option value='Medication - Unperscribed'>Medication - Unperscribed</option>
					<option value='White Noise/ Sleep Noises'>White Noise/ Sleep Noises</option>
				</select>
				<input required placeholder="Quality of Sleep" type="number" min="1" max="5" value={sleep.sleepQuality} name="sleepQuality" onChange={handleChange}></input>
				<input required placeholder="Notes" type="text" value={sleep.notes} name="notes" onChange={handleChange}></input>
				<input type="submit"></input>
			</form>
		)
}

export default Add
