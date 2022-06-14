import React, { useState, useEffect } from 'react'

const Edit = (props) => {
		const [sleep, setSleep] = useState({...props.sleep})

		const handleChange = (event) => {
			setSleep({...sleep, [event.target.name]: event.target.value})
		}

		const handleSubmit = (event) => {
			event.preventDefault()
			props.handleUpdate(sleep)
		}
			return (
				<>
				<form onSubmit={handleSubmit}>
					<input type="text" name="name" value={sleep.name} onChange={handleChange}></input>
					<input type="number" name="age" value={sleep.age} onChange={handleChange}></input>
					<input type="date" name="date" value={sleep.date} onChange={handleChange}></input>
					<input type="text" name="routine" value={sleep.routine} onChange={handleChange}></input>
					<input type="number" name="hoursSlept" value={sleep.hoursSlept} onChange={handleChange}></input>
					<input type="number" name="sleepQuality" value={sleep.sleepQuality} onChange={handleChange}></input>
					<input type="submit"></input>
				</form>
				</>
		)
}

export default Edit
