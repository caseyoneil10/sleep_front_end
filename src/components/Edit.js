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
				<container className="container">
					<form onSubmit={handleSubmit}>
						<input type="date" name="date" value={sleep.date} onChange={handleChange}></input>
						<input type="number" min="0" max="24" name="hoursSlept" value={sleep.hoursSlept} onChange={handleChange}></input>
						<select name="routine" value={sleep.routine} onChange={handleChange}>
							<option value='select an option'>Select an Option From Below</option>
							<option value='none'>None</option>
							<option value='Exercise Before Bed'>Exercise Before Bed</option>
							<option value='Meditation/Mindfulness'>Meditation/Mindfulness</option>
							<option value='Medication - Prescribed'>Medication - Prescribed</option>
							<option value='Medication - Unprescribed'>Medication - Unprescribed</option>
							<option value='White Noise/ Sleep Noises'>White Noise/ Sleep Noises</option>
						</select>
						<input type="number" name="sleepQuality" min="1" max="5" value={sleep.sleepQuality} onChange={handleChange}></input>
						<textarea required type="text" value={sleep.notes} name="notes" onChange={handleChange}></textarea>
						<input type="submit"></input>
					</form>
				</container>
				</>
		)
}

export default Edit
