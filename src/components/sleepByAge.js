// const React = require("react")
import React, {useState, useEffect} from 'react'

//get the user's age
//make const for each age range
//compare the users age to an age rang
    //if user.age is in adultRange
    //compare avg user.hours to hours range

const SleepByAge = (props) => {

const [userAge, setUserAge] = useState(props.currentUser.age)

//agegroup, minAge, MaxAge, Min Sleep, MaxSleep
const sleepRanges = [
    ["teen",'13', '18', '8', '10'],
    ["adult",'18', '60', '7', '10'],
    ["olderAdult",'61', '64', '7', '9'],
    ["retiree",'65', '100', '7', '8'],
]
const [checkAgeMessage, setCheckAgeMessage] = useState('')

const userAgeCheck = () => {
   setUserAge(props.currentUser.age)
 }

const checkAge = () => {

    for(let i = 0; i <= sleepRanges.length; i++){

        if (props.currentUser.age > 13 && userAge < 18) {
            return setCheckAgeMessage(`Teenagers should get between 8 and 10 hours of sleep a night.`)
            } else if
            (props.currentUser.age > 18 && userAge < 60) {
            return setCheckAgeMessage(`Adults should get between 7 and 10 hours of sleep a night.`)
            } else if
            (props.currentUser.age > 61 && userAge < 64) {
            return setCheckAgeMessage(`Older adults should get between 7 and 9 hours of sleep a night.`)
            } else if
            (props.currentUser.age >= 65) {
            return setCheckAgeMessage(`Retirees should get between 7 and 8 hours of sleep a night.`)
            } else {
            return setCheckAgeMessage("You may be too young to use this app")
            }
        }
    }


    useEffect(() => {
        checkAge()

      }, [])
    return (
        <>
           <div>
            <h1>{checkAgeMessage}</h1>
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
