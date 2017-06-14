/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Felis catus";
animal['name'] = "Pajanimal";
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Meow";
noises.push("Coo");
noises.unshift("Purr");
noises.push("Roar");
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push("Mew");
console.log(animal);




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Using bracket and/or dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 * Using array functions and bracket notation
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
console.log(animals);
var dog = { 
    species: 'dog', 
    name: 'Shenzi', 
    noises: ['woof', 'bark', 'groan'] 
};
var bird = { 
    species: 'bird', 
    name: 'Basil', 
    noises: ['tweet', 'chirp', 'bleep'] 
};
animals.push(dog);
animals.push(bird);
console.log(animals);
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* I will be using an array as my data structure to hold friends,
 * because they can hold an indefinite number of items.
 */
 var friends = [];
 
 function getRandomAnimal(animalArr) {
    var index = Math.floor(Math.random() * ((animalArr.length) - 0)) + 0;
    return animalArr[index];
 }
 var randomAnimal = getRandomAnimal(animals);
 console.log(randomAnimal);
 
 friends.push(randomAnimal.name);
 console.log(friends);
 getRandomAnimal(animals).friends = friends;

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
