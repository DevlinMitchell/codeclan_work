var movie = {
    title: "Truman Show",
    year: 1998,
    language: "English"
}
//Removes a key - value pair
delete movie.language

//Add a new key - value pair
movie.actor = "Jim Carrey"

// Update an existing key - value pair 
// movie.year = 1999


var movie2 = {
    title: "Fight Club", 
    year: 1999,
    cast: ["Edward Norton", "Brad Pitt"],
    subtitleLanguage: "German",
    ratings: {imdb: 8.8, rt: {critics: 79, audience: 92}}
}

// console.log(movie2.cast[1])
console.log(movie2.ratings.rt.audience)
