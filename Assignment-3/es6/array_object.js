const mcuMovies = [
    {
        name: "Captain Marvel",
        year: 2019,
        rating: 6.8,
        superheroes: ["Captain Marvel", "Nick Fury", "Maria Rambeau"]
      },
      {
        name: "Iron Man",
        year: 2008,
        rating: 7.9,
        superheroes: ["Iron Man", "Pepper Potts", "James Rhodes"]
      },
      {
        name: "Guardians of the Galaxy",
        year: 2014,
        rating: 8.0,
        superheroes: ["Star-Lord", "Gamora", "Drax", "Rocket", "Groot"]
      },
      {
        name: "The Avengers",
        year: 2012,
        rating: 8.0,
        superheroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
      },
      {
        name: "Captain America: The Winter Soldier",
        year: 2014,
        rating: 7.8,
        superheroes: ["Captain America", "Black Widow", "Falcon"]
      },
      {
        name: "Black Panther",
        year: 2018,
        rating: 7.3,
        superheroes: ["Black Panther", "Shuri", "Okoye", "M'Baku"]
      },
      {
        name: "Thor: Ragnarok",
        year: 2017,
        rating: 7.9,
        superheroes: ["Thor", "Hulk", "Loki", "Valkyrie"]
      }
    ];
    
    // Display movie name in the format "MOVIENAME is released on YEAR and has a ratigng of RATING"
    // mcuMovies.forEach( movie => {
    //   // console.log(`${movie.name} is released on ${movie.year} and has a ratigng of ${movie.rating}`);
    //   let {name, year, rating} = movie
    //   console.log(`${name} is released on ${year} and has a ratigng of ${rating}`);
      
    // })


    // Create an array with all the movie names
    // let names = mcuMovies.map(movie => movie.name)
    // console.log(names);
    

    // Find the movies relesed after 2015
    // let newMovies = mcuMovies.filter(movie => movie.year > 2015)
    // console.log(newMovies);
    

    // Find the average rating of all the movies
    // let totalRating = mcuMovies.reduce((totalRating, movie)=> totalRating+movie.rating, 0)
    // console.log(`Avg Rating: ${totalRating/mcuMovies.length}`);
    

    // Display the movie where "Iron Man" is involved
    // let ironMovies = mcuMovies.filter(movie => movie.superheroes.includes("Iron Man"))
    // console.log(ironMovies);
    

    // Delete "Guardians of the Galaxy"
    // let movies = mcuMovies.filter(movie => movie.name !== "Guardians of the Galaxy")
    // console.log(movies);
    
    
    // sort the movies based on release year
    mcuMovies.sort((m1, m2) => m2.year - m1.year)
    console.log(mcuMovies);
    