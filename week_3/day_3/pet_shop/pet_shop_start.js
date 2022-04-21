var myPetShop = {
    admin: {
        total_cash: 1000,
        pets_sold: 0,
    },
    name: "Camelot of Pets",
    pets: [
        {
            name: "Sir Percy",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "King Bagdemagus",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "Sir Lancelot",
            pet_type: "dog",
            breed: "Pomsky",
            price: 1000,
        },
        {
            name: "Arthur",
            pet_type: "dog",
            breed: "Husky",
            price: 900,
        },
        {
            name: "Tristan",
            pet_type: "cat",
            breed: "Basset Hound",
            price: 800,
        },
        {
            name: "Merlin",
            pet_type: "cat",
            breed: "Egyptian Mau",
            price: 1500,
        }
    ]
}



var pet1 = {
    name: "Norman",
    pet_type: "dog",
    breed: "Husky",
    price: 4000,
}


// 1. Create a function to return a pet shops name
function getPetShopNames(petShop){
    return petShop.name
}
//console.log(getPetShopNames(myPetShop))

// 2. Create a function that will return a pet shops total cash

function petShopCash(petShop){
    return petShop.admin.total_cash
  }
  
  //console.log(petShopCash(myPetShop))


// 3. Create a function that can take in an amount of money and add it to a pet shops total cash

function addAmount(PetShop, amount){
    PetShop.admin.total_cash= PetShop.admin.total_cash + amount
  return PetShop.admin.total_cash
  }
  //console.log(addAmount(myPetShop, 500))
  

// 4. Create a function that can take in an amount of money and remove it from a pet shops total cash

function addAmount(PetShop, amount){
    PetShop.admin.total_cash= PetShop.admin.total_cash - amount
  return PetShop.admin.total_cash
  }
 // console.log(addAmount(myPetShop, 500))

// 5. Create a function that can add 1 to a pet shops amount of pets sold

function addAmount(PetShop, amount){
    PetShop.admin.pets_sold= PetShop.admin.pets_sold + amount
  return PetShop.admin.pets_sold
  }
  //console.log(addAmount(myPetShop, 1))


// 6. Create a function that can return how many pets a pet shop has in its stock

function totalPets(total){
    return total.pets.length
}
// console.log(totalPets(myPetShop))

// 7. Create a function that can return a pet from a pet shop, by its name

function findPetByName(PetShop, name){
  return PetShop.pets.name 
  }
  console.log(findPetByName(myPetShop, "Arthur"))

// 8. Create a function that can return the total cost of all pets in a pet shop


// 9. Create a function that can return all the pets for a given breed


// 10. Create a function that can add a pet to stock (Use pet1 above to add)


// 11. Create a function that can remove a pet from stock
//. Hint: Use pet1 from above (make sure its added), find its index and remove with splice



// 12. Sell a pet: Create a function that can remove a pet from stock, and also add the cost of the pet to the total cash of the shop, and also add 1 to the amount of pets sold. (Re-use your functions!)

