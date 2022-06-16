//get the user's age
//make const for each age range
//compare the users age to an age rang
    //if user.age is in adultRange
    //compare avg user.hours to hours range





// import React, { useState, useEffect, useReducer } from 'react'

const sleepRanges = [
    {
        ageGroup: "teen",
        ageRange: {
            min: 13,
            max: 18,
        },
        sleepRange:
        {
            min: 8,
            max: 10,
        },
    },
    // {
    //     ageGroup: "adult",
    //     ageMin: 18,
    //     ageMax: 60,
    //     hoursPerNightMin: 7,
    //     hoursPerNightMaX: null,
    // },
    // {
    //     ageGroup: "olderAdult",
    //     ageMin: 61,
    //     ageMax: 64,
    //     hoursPerNightMin: 7,
    //     hoursPerNightMaX: 9,
    // },
    // {
    //     ageGroup: "retiree",
    //     ageMin: 65,
    //     ageMax: null,
    //     hoursPerNightMin: 7,
    //     hoursPerNightMaX: 8,
    // }
]




let checkAge= () =>{
   const age = 30
const sleep = 8

    if (age >= sleepRanges[0].ageRange.min &&  age <= sleepRanges[0].ageRange.max)
        
        console.log(`You get an average of ${sleep} per night.`)
        console.log(`For people in your age range, you should get between ${sleepRanges[0].sleepRange.min} and ${sleepRanges[0].sleepRange.max} hours of sleep a night.`)
    
}

console.log(checkAge())
// const sleepByAge = (props) =>{
//     if sle

// }

// export default sleepByAge
