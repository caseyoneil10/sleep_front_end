import React, { useState, useEffect } from 'react'

const Add = (props) => {

	let emptySleep = {notes: '', date: '', hoursSlept: '', routine: '', sleepQuality: '', username: ''}



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
			setSleep({date: '', hoursSlept: '', routine: '', sleepQuality: '', notes: '', username: ''})

	}

		return (
			<form className="addPost" onSubmit={handleSubmit}>
			<div className="">
			<div className="three columns">
			<span>Log Date</span>	<input required placeholder="Date" type="date" value={sleep.date} name="date" onChange={handleChange}></input>
			</div>
				
			<div className="three columns">	
			<span>Hours Slept</span> <br />	<input className="hoursSlept"required placeholder="Hours Slept"  type="number" value={sleep.hoursSlept} name="hoursSlept" min="0" max="24" onChange={handleChange}></input>
			</div>
				
			<div className="six columns">
			<span>Sleep Routine</span>	<select className="" required name="routine" value={sleep.routine} onChange={handleChange}>
					<option value='select an option'>Select an Option </option>
					<option value='none'>None</option>
					<option value='Exercise Before Bed'>Exercise Before Bed</option>
					<option value='Meditation/Mindfulness'>Meditation/Mindfulness</option>
					<option value='Medication - Prescribed'>Medication - Prescribed</option>
					<option value='Medication - Unprescribed'>Medication - Unprescribed</option>
					<option value='White Noise/ Sleep Noises'>White Noise/Sleep Noises</option>
				</select>
				</div>
				</div>
				<hr />
				<div className="">
					<div className="three columns">
					<span>Quality of Sleep (1-5)</span>	<input className="date" required placeholder="Quality of Sleep" type="number" min="1" max="5" value={sleep.sleepQuality} name="sleepQuality" onChange={handleChange}></input>
				</div>
		
				
				<div className="six columns">
				<span>Sleep Diary</span><br /><textarea  required placeholder="Notes" type="text" value={sleep.notes} name="notes" onChange={handleChange}></textarea>
				</div>
				</div>
						
					<input className="submitBtn" type="submit"></input>
				
				
			</form>
		)
}

export default Add
