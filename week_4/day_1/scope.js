// var name = "Devlin"

var secretFunction = function(){
    var pincode = [3, 8, 2, 1]
    // console.log(name)
    // console.log("pincode inside the function", pincode )
}

secretFunction()

// console.log("pinCode outside the function", pincode)

var filterNamesByFirstLetter = function(names, letter){
    var filteredNames = []
    for(let name of names){
        if(name[0] === letter){
            filteredNames.push(name)
        }
        // console.log(name)
    }
    
    return filteredNames
}

var students = ["Devlin", "Connor", "Aj", "Harrison", "Arad", "Bart", "Abbas", "Mohammed"]
// console.log(filterNamesByFirstLetter(students, "D"))

let calculateEnergy = function(mass){
    const speedOfLight = 299792458
    // speedOfLight ++
    return mass * speedOfLight **2
}

// console.log(calculateEnergy(75))v 