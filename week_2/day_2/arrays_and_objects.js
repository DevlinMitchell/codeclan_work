var sports = ["Football", "Tennis", "Rugby"]
// console.log(sports[0])
console.log("Array Length: ", sports.length)

//Adds to the array
sports.push("Curling")
sports.push("Snooker")
sports.push("Darts")

//Remove the last element in the array
var removedSport = sports.pop()
// console.log("All sports: ", sports)
console.log("Removed From The Back: ", removedSport)

//Remove the first element in the array
var removedFirstSport = sports.shift()
console.log("Removed From The Front:", removedFirstSport)
console.log(sports)

//Add an element to the start of the array
sports.unshift("Basketball")
console.log(sports)

//Removing elements anywhere in the array
// 1. What index were starting at
// 2. How many are we removing
var SplicedSport = sports.splice(2, 1)
console.log(sports)
console.log("Spliced sport: ", SplicedSport)

//Add elements anywhere in the array
// 3. The element I want to add
sports.splice(2, 0, "Golf")
console.log(sports)