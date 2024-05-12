const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(kittyData) {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const orangeKitties = kittyData.filter((kitten) => {
      return kitten.color === 'orange'
    });

    const orangeKittyNames = orangeKitties.map((kitten) => {
      return kitten.name
    });
      return orangeKittyNames

    // Annotation:
    // .filter checks every element in the kitties array to see if it has a key of "color" with a value of "orange". If the element passed to the callback function as an argument returns true (i.e., has key of color with a value of "orange"), the element is added to the array stored to the orangeKitties variable. orangeKitties doesn't need to be returned because it is an intermediate step. 
    // .map executes the same code on every element in the orangeKittyNames array. It transforms the array of orangeKitties into an array of their names. 
  },

  sortByAge(kittyData) {
    // Sort the kitties by their age
    // Return an array of objects that are in order from oldest to youngest kitty.

    let organizeKittenAges = kittyData.map(kitten => {
      return kitten
    });
    return organizeKittenAges.sort((kittyA, kittyB) => kittyB.age - kittyA.age)
  },
    // Annotation:
    // kittyA and kittyB represent the two elements in array being compared. If the result is positive, kittyB is sorted to an index lower than kittyA (meaning kittyB is older and kittyA is younger).
  
  growUp(kittyData) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const olderKitties = kittyData.map(kitten => {
     kitten.age += 2
     return kitten
    })
    return olderKitties.sort((kittyA, kittyB) => kittyB.age - kittyA.age)
  },
    // Annotation:
    // .map executes the same code on every element in the array. It adds 2 to the kitten.age value for each kitten element.
    // kittyA and kittyB represent the two elements in array being compared. If the result is positive, kittyB is sorted to an index lower than kittyA (meaning kittyB is older and kittyA is younger).
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

const petPrompts = {
  orangePetNames(petData) {
    const orangePets = petData.filter((pet) => {
      return pet.color === 'orange'
    });
    const orangePetNames = orangePets.map((pet) => {
      return pet.name
    });
      return orangePetNames
  },

  sortByAge(petData) {
    let organizePetAges = petData.map(pet => {
      return pet
    });
    return organizePetAges.sort((petA, petB) => petB.age - petA.age)
  },

  growUp(petData) {
    const olderPets = petData.map(pet => {
     pet.age += 2
     return pet
    })
    return olderPets.sort((petA, petB) => petB.age - petA.age)
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // const studentsForEachInstructor = mods.map(modObj => {
    //   return {
    //     mod: modObj.mod,
    //     studentsPerInstructor: modObj.students / modObj.instructors
    //   }
    // });
    // console.log(studentsForEachInstructor)
    // return studentsForEachInstructor

   return mods.map(modObj => {
      return {
        mod: modObj.mod,
        studentsPerInstructor: modObj.students / modObj.instructors
      }
    });
    // Annotation:
    // Use .map because test wants us to return an array of objects and the length of the modified array should be the same length as the original array. 
    // We need to return a new object with mod and studentsPerInstructor as keys. We assign the values to the new keys using the information provided in the original mod object. 
    // To determine how many students there are per instructor, we divide the number of students by the number of instructors. 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

   return cakes.map(cake => {
    return {
    flavor: cake.cakeFlavor,
    inStock: cake.inStock
    }
   })

    // Annotation:
    // Write your annotation here as a comment

  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    return cakes.filter(cake => {
      return cake.inStock > 0
    })

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    // let total = 0;
    // cakes.forEach(cake => {
    //   total += cake.inStock
    // })
    // return total

    return cakes.reduce((totalCakes, cake) => {
      totalCakes += cake.inStock
      return totalCakes
    }, 0)

    // Annotation:
    // This prompt can be solved using .forEach and .reduce.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    let allToppings = []
    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if(!allToppings.includes(topping)){
          allToppings.push(topping)
        }
      })
    })
    return allToppings;

    // Annotation:
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const allToppings = cakes.map(cake => {
      return cake.toppings
    })

    const allToppingsFlattened = allToppings.reduce((array, innerToppingsArray) => {
      return [...array, ...innerToppingsArray]
    }, [])

    const groceryListObj = allToppingsFlattened.reduce((accumulator, topping) => {
      if(accumulator[topping]) {
        accumulator[topping]++;
      } else{
        accumulator[topping] = 1;
      }
      return accumulator 
    }, {})
    return groceryListObj

    // Annotation:
    // use .map to create a new array by of six elements, each of which are an array that contains toppings. 
    // use .reduce to flatten the six elements into a single array.
    // check if the current topping is already a key in the accumulator object. If it is, it increments the count of that topping. If it's not, it adds the topping to the accumlator with a count of 1.
    // bracket notation is used because topping is a variable that holds the name of a key in the accumulator object. The toppings are strings that sometimes have spaces. 
  }
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const feClassrooms = classrooms.filter(classroom => {
      return classroom.program === 'FE'
    })
    return feClassrooms

    // Annotation:
    // use .filter to return an array of classroom elements whose classroom.program is strictly equal to 'FE'.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // pseudocode:
    // first find the classroom.program with value of "FE"
    // second find the classroom.program with value of "BE"
    // sum the capacity for the FE program
    // sum the capacity for the BE program
    // create a new object with feCapacity and beCapacity as keys that have corresponding capacity values. 

    // let totalFECapacity = 0;
    // let totalBECapacity = 0; 

    // const feClassrooms = classrooms.filter(classroom => {
    //   return classroom.program === "FE"
    // })

    // feClassrooms.forEach(classroom => {
    //   totalFECapacity += classroom.capacity
    // })

    // const beClassrooms = classrooms.filter(classroom => {
    //   return classroom.program === "BE"
    // })

    // beClassrooms.forEach(classroom => {
    //   totalBECapacity += classroom.capacity
    // })
   
    const totalCapacities = classrooms.reduce((accumulator, classroom) => {
      if(classroom.program === "FE") {
        accumulator.feCapacity += classroom.capacity
      } else {
        accumulator.beCapacity += classroom.capacity
      }
      return accumulator
    }, {feCapacity: 0, beCapacity: 0})
    return totalCapacities
    
    // Annotation:
    // use .reduce to return a new object
    // can use an object with keys and values as the initial value
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const sortedClassrooms = classrooms.sort((classroomA, classroomB) => {
      return classroomA.capacity - classroomB.capacity
    })
    return sortedClassrooms

    // Annotation:
    // no annotations at this time.
  }
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // pseuodocode 
    // iterate over the weather array and drill into the weatherByLocation objects to get to the temperate key.
    // temperature is a key that has two properties - a high key and a low key whose values are the high and low temperatures of that location. 
    // need to find the average of the high temperature and low temperature. high temp + low temp / 2
    
   const avgTemps = weather.map(weatherByLocation => {
      return (weatherByLocation.temperature.high + weatherByLocation.temperature.low) / 2
    })
    return avgTemps

    // Annotation:
    // use .map because we want to return a new array based on the original array.
    // .map will always return a new array of the same length as the original array. 
    // we want to do something to each weather element and return that modified item. 
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // pseduocode:
    // iterate over each weather element and find the type key with a value of sunny or mostly sunny.
    // use string interpolation to print an array of sentences of the locations that are sunny and mostly sunny.

    let sunnySpotsMessage = []
    const findSunnySpots = weather.filter(weather => {
      return weather.type === 'sunny' || weather.type === 'mostly sunny'
    })

    findSunnySpots.forEach(location => {
      sunnySpotsMessage.push(`${location.location} is ${location.type}.`)
    })
    return sunnySpotsMessage

    // Annotation:
    // use .filter to iterate over each weather element and return a new array of weather elements whose type key has a value of sunny or mostly sunny.
    // able to use the or operator || to return both sunny and mostly sunny. 
    // do not need to return findSunnySpots to use in the forEach method.
    // able to push an entire sentence to an empty array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    // pseudocode:
    // iterate over each weather element and return the location with the highest humidity. 
    // will likely need to use two methods.

    const highestToLowestHumidity = weather.sort((locationA, locationB) => {
      return locationB.humidity - locationA.humidity
    })
    
    return highestToLowestHumidity.find(location => {
      return location.humidity > 0
    })

    // Annotation:
    // use .sort to sort the weather array from highest to lowest humidity.
    // we know that the location with the highest humidity is the first element (index position 0) in the highestToLowestHumidity array.
    // .find returns the first instance of an item.
    // used. find to return the first element (location) with a humidity over 0. 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const parkVisitStatus = nationalParks.reduce((accumulator, parkInfo) => {
      if(parkInfo.visited) {
        accumulator.parksVisited.push(parkInfo.name)
      } else if (!parkInfo.visited) {
        accumulator.parksToVisit.push(parkInfo.name)
      }
      return accumulator
    }, {parksToVisit: [], parksVisited: []})
    return parkVisitStatus
    
    // Annotation:
    // the initial value is an object with the keys parksToVisit and parksVisited. The values of each key is an empty array.
    // currentValue is the parkInfo element (this is what we are iterating over).
    // if parkInfo.visited is strictly equal to truthy, then push the parkInfo.name into the accumulator.parksVisited. 
    // if parkInfo.visited is strictly equal to falsy, then push the parkInfo.name into the accumulator.parksToVisit. 
    // return the accumulator within the callback function.
    // return the variable outside the callback function. 
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // const parksInEachState = nationalParks.map(parkInfo => {
    //   let parkState = parkInfo.location
    //   return {
    //     [parkState]: parkInfo.name
    //   }
    // })
    // return parksInEachState

    const parksInEachState = nationalParks.map(parkInfo => ({
      [parkInfo.location]: parkInfo.name
    }))
    return parksInEachState

    //  const parksInEachState = Object.fromEntries(nationalParks.map(parkInfo => {
    //    return [parkInfo.location, parkInfo.name]
    //   }))
    //   console.log(parksInEachState)
   
    // const parksInEachState = nationalParks.reduce((accumulator, parkInfo) => {
    //   accumulator[parkInfo.location] = parkInfo.name
    //   return accumulator
    // }, {})
    
    // console.log("parksInEachState", parksInEachState)
    // return parksInEachState

      // Annotation:
    // use .map to transform parkInfo elements in existing array into new array of objects.
    // the key for the new objects is the state in which the national park is located. declare a variable for the key name outside of the object being returned. For the first iteration, the key value will be "Colorado". For each subsequent iteration, the key value will change based on the parkInfo.location. Use bracket notation to pass through the value of the variable for that iteration. 
    // the value of the state key is the national park name. use parkInfo.name to assign the value to the key.
    // the code using .reduce and Object.fromEnteries does not work because it returns one object. The test is expecting an array of six elements (objects).
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    // pseudocode:
    // breweries is an array of brewery objects.
    // each brewery has a beer key that contains an array of beer objects.
    // need to iterate through each brewery element and then iterate through each beer key to return the total beer count for every brewery. 
    // declare totalBeer variable that starts at 0 and is updated with the number of beers per brewery in each iteration using += 
    // use .length to determine how many beer elements there are in brewery.beers.

    let totalBeers = 0; 
    breweries.forEach(brewery => {
      totalBeers += brewery.beers.length
    })
    return totalBeers

    // Annotation:
    // If modifying a variable or pushing to an array using .forEach, the variable needs to be declared outside of the callback function. The variable needs to be returned outside of the callback function. 
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // pseudocode:
    // accessing information from the original breweries array to return a new array of objects. The new objets will have keys of name and beerCount. 
    // use .map to iterate over each brewery element and access the information needed in the new array of objects. 
    // use .length to determine how many beers (elements) there are in the brewery.beers and store that value to the new beerCount key. 

    return breweries.map(brewery => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length
      }
    })

    // Annotation:
    // use .map to iterate over an array of objects and grab the information provided in each element (object) to create a new object.
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5

    // pseudocode: 
    // passing through a parameter (breweryName)
    // return the number of beers that breweryName has
    // use .length to determine how many beers (elements) there are in brewery.beers
    
    let totalBeersPerBrewery = 0;

    breweries.forEach(brewery => {
      if(breweryName === brewery.name) {
        totalBeersPerBrewery = brewery.beers.length
      }
    })
    return totalBeersPerBrewery

    // Annotation:
    // no annotations at this time 
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const beers = breweries.map(brewery => {
      return brewery.beers
    })
    
    const flattenedBeerArray = beers.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue)
    }, [])

    const sortedFlattenedBeerArray = flattenedBeerArray.sort((beerA, beerB) => {
      return beerB.abv - beerA.abv
    })

    return sortedFlattenedBeerArray.find(beer => {
      return beer.abv > 0
    }) 

    // Annotation:
    // use .map to create a new array of five array elements, each of which contain beer objects. 
    // use .reduce method is used to iterate over each sub-array (currentValue) and concatenate it to the accumulator array (accumulator). The second argument to .reduce() is an empty array ([]). which serves as the initial value for the accumulator. 
    // after runnning the .reduce method, the flattenedBeerArray will contain all the objects from the original nested arrays. 
    // use .sort to sort beer objects from highest to lowest abv.
    // we know that the beer objects in the flattenedBeerArray are now in order from highest to lowest abv.
    // use .find to return the first element (beer object) in the sortedFlattenedBeerArray, which we know has the highest abv. 
  } 
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
