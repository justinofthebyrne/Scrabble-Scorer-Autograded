// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let word = "";



const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const superSimpleScorer = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'];

const superVowelBonusScorer = {
   3: ['A', 'E', 'I', 'O', 'U'],
   1: ['L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']

};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   word = input.question("Enter a word:")
   // console.log("Which scoring algorithm would you like to use?");
   // console.log("algorithm name: ");
};

function simpleScorer(word) {
   word = word.toUpperCase();
   pointValue = 1;
   for (let i = 0; i < word.length; i++) {

   }
   return pointValue;
}


let vowelBonusScorer = (word) => {
   word = word.toUpperCase();

   // for (let );


   return 3; //This is just a place holder//
};

let scrabbleScorer;

const scoringAlgorithms = {
   1: ["Simple Score:Each letter is worth 1 point"],
   2: ["Bonus Vowels: Vowels are worth 3 points, consonants are worth 1 point"],
   3: ["Scrabble: The traditional scrabble scoring algorithm"] 
};

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   console.log(simpleScorer(word));
   // console.log(oldScrabbleScorer(word));
   // console.log(vowelBonusScorer(word));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
