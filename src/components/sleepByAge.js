// const React = require("react")
import React, {useState, useEffect} from 'react'

//get the user's age
//make const for each age range
//compare the users age to an age rang
    //if user.age is in adultRange
    //compare avg user.hours to hours range
const SleepByAge = (props) => {

//agegroup, minAge, MaxAge, Min Sleep, MaxSleep
const sleepRanges = [
    ["teen",'13', '18', '8', '10'],
    ["adult",'18', '60', '7', '10'],
    ["olderAdult",'61', '64', '7', '9'],
    ["retiree",'65', '100', '7', '8'],
]

let userHoursSlept = []
let totalHours = 0

const [checkAgeMessage, setCheckAgeMessage] = useState('')

//Find all posts and save them in state
const [avgHours, setAvgHours] = useState(props.sleepData.filter((posts) => posts)
  )

//loop over the avgHours state and find only the posts that have matching usernames and then push the hourSlept index into a new array named userHoursSlept.
for (let i = 0; i < avgHours.length; i++)
 {
    if (avgHours[i].username == props.user.username){
    userHoursSlept.push(avgHours[i].hoursSlept)}
  else {
 }
}
//Loop over the userHoursSlept array and find the sum of all the numbers in the array.
for (let i = 0; i < userHoursSlept.length; i++) {
  totalHours += userHoursSlept[i]
}
let averageHours = (totalHours / userHoursSlept.length)

const checkAge = () => {
    for(let i = 0; i <= sleepRanges.length; i++){
        if (props.currentUserAge > 13 && props.currentUserAge < 18) {
            return setCheckAgeMessage(`Teenagers should get between 8 and 10 hours of sleep a night. You currently average ${Math.round(averageHours * 100) / 100} hours of sleep per night.`)
            } else if
            (props.currentUserAge > 18 && props.currentUserAge < 60) {
            return setCheckAgeMessage(`Adults should get between 7 and 10 hours of sleep a night. You currently average ${Math.round(averageHours * 100) / 100} hours of sleep per night.`)
            } else if
            (props.currentUserAge > 61 && props.currentUserAge < 64) {
            return setCheckAgeMessage(`Older adults should get between 7 and 9 hours of sleep a night. You currently average ${Math.round(averageHours * 100) / 100} hours of sleep per night.`)
            } else if
            (props.currentUserAge >= 65) {
            return setCheckAgeMessage(`Retirees should get between 7 and 8 hours of sleep a night. You currently average ${Math.round(averageHours * 100) / 100} hours of sleep per night.`)
            } else {
            return setCheckAgeMessage("You may be too young to use this app")
            }
        }
    }

    useEffect(() => {
        checkAge()
      }, [props.handleLogin])

    return (
        <>
           <div class="sleepfacts">
           <br/>
            <h3>Sleep Facts</h3>
                <hr />
                <h5>{checkAgeMessage}</h5>
           </div>


        </>
    )
}
export default SleepByAge
//---------------CODE GRAVEYARD----------------//
// const sleep = 8

//     if (age >= sleepRanges[0].ageRange.min && age <= sleepRanges[0].ageRange.max)

//         console.log(`You get an average of ${sleep} hour sper night.`)
//         console.log(`For people in your age range, you should get between ${sleepRanges[0].sleepRange.min} and ${sleepRanges[0].sleepRange.max} hours of sleep a night.`)

// }

// console.log(checkAge())

 // if (posts.username == user.username) {
    //     return user.age }
    //     sleepRanges.map(sleepRanges)
    // }
//    const checkAge = () =>{
//     sleepRanges.map = (age) =>{
//       return console.log("test")
//     }
//    }

// const minAge = sleepRanges.map((sleepRanges) => sleepRanges.ageRange.min);
// const maxAge = sleepRanges.map((sleepRanges) => sleepRanges.ageRange.max);
// const minSleep = sleepRanges.map((sleepRanges) => sleepRanges.sleepRange.min);
// const maxSleep = sleepRanges.map((sleepRanges) => sleepRanges.sleepRange.max);
// let userAge = 20
//     checkAge()
