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
					<h3>Edit This Log</h3>
					<form className="editPost" onSubmit={handleSubmit}>
					<div className="">
					
					<div className="three columns">
					<span>Log Date</span>
						<input type="date" name="date" value={sleep.date} onChange={handleChange}></input>
					</div>
					
					<div className="three columns">	
					<span>Hours Slept</span> <br />
						<input type="number" min="0" max="24" name="hoursSlept" value={sleep.hoursSlept} onChange={handleChange}></input>
					</div>
					
					<div className="six columns">
					<span>Sleep Routine</span>
						<select name="routine" value={sleep.routine} onChange={handleChange}>
							<option value='select an option'>Select an Option</option>
							<option value='none'>None</option>
							<option value='Exercise Before Bed'>Exercise Before Bed</option>
							<option value='Meditation/Mindfulness'>Meditation/Mindfulness</option>
							<option value='Medication - Prescribed'>Medication - Prescribed</option>
							<option value='Medication - Unprescribed'>Medication - Unprescribed</option>
							<option value='White Noise/ Sleep Noises'>White Noise/ Sleep Noises</option>
						</select>
						</div>
						</div>
						<br />
						<br />
						<br />
						<div className="row">
						<div className="four columns">
							<span>Quality of Sleep (1-5)</span><br />
							<input type="number" name="sleepQuality" min="1" max="5" value={sleep.sleepQuality} onChange={handleChange}></input>
						</div>

						<div className="five columns">
							<span>Sleep Diary</span><br />
							<textarea required type="text" value={sleep.notes} name="notes" onChange={handleChange}></textarea>
						</div>
						</div>
						
						
						<input type="submit"></input>
						
					</form>
			
				</>
		)
}

export default Edit
