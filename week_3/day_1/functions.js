function sayHello(name){
    // console.log("Hello " + name)
    var greeting = "Hello " + name
    return greeting
}


var newGreeting = sayHello("Devlin")

// console.log(newGreeting)


function timeOfDay(time, date, year){
    var timeAndDate = "The time is " + time + " on " + date + year
    return timeAndDate
}

var todaysDate = timeOfDay("10:48", "11th of April", " 2022!")
// console.log(todaysDate) 

var todaysDate2 = timeOfDay("11:25", "12th of April", " 2022!")
// console.log(todaysDate2)



// Calculator

function add(FirstNumber, SecondNumber){
var result = FirstNumber + SecondNumber
return result
}

var answer = add(1, 4)
var answer2 = add(4, 5)
// console.log(answer)

// subtract, multiply and divide

function subtract(FirstNumber, SecondNumber){
    var result = FirstNumber - SecondNumber
    return result
}

var answer = subtract(10, 10)
//console.log(answer)

function multiply(FirstNumber, SecondNumber){
    var result = FirstNumber * SecondNumber
    return result
}

var answer = multiply(5, 10)
//console.log(answer)

function divide(FirstNumber, SecondNumber){
    var result = FirstNumber / SecondNumber
    return result
}

var answer = divide (1, 1)
//console.log(answer)

// I want to pass in a string and get returned the length of the string
var name = "Devlin"

function lengthOfAString(string){
    var length = string.length
    return length
}

var lengthOfName = lengthOfAString(name)
//console.log(lengthOfName)

// I want the total of 2 strings added together
var name1 = "Devlin"
var name2 = "Aj"

function lengthOf2Strings(string1, string2){
    var total = string1.length + string2.length
return total
}

var totalOfName = lengthOf2Strings(name, name2)
console.log(totalOfName)



