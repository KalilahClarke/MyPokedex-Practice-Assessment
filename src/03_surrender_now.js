/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");
const morePokemon = require("../data/poke_remix");
const exampleWeaknesses = require("../data/weaknesses");
// Do not change the line above.

/**
 * filterByType()
 * -----------------------------

 * Returns all Pokemon names with a matching type. Case-insensitive. If the inputted `pokemon` array is empty or no pokemon match the inputted `type`, return `[]`.

 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {string} type - an optional parameter. The type of a Pokemon. (e.g. "Fire")
 * @returns {Object[]} An array of Pokemon objects where at least one of the Pokemons's types matches the `type` inputted.
 *
 * EXAMPLE:

 *  filterByType(pokemon, "Steel");
 *  //> [ {
 *          // 'Sandshrew'
 *        }, 
 *        {
 *          // 'Diglett'
 *        }, 
 *        {
 *          // 'Dugtrio'
 *        } ]

 *
 * EXAMPLE:
 *  filterByType(pokemon, "Shadow")
 *  //> [];
 */
function filterByType(pokemon, type) {
  let nameAndType = [];

  if (!pokemon.length) {
    return nameAndType;
  }
  if (!type) {
    type = "Normal";
  }
  for (let i = 0; i < pokemon.length; i++) {
    for (let j = 0; j < pokemon[i].type.length; j++) {
      if (pokemon[i].type[j].toLowerCase() === type.toLowerCase()) {
        nameAndType.push(pokemon[i]);
      }
    }
  }
  return nameAndType;
}

/**
 * getPokemonNamesMostEffectiveAgainstType()
 * -----------------------------
 * Returns all names of Pokemon that have a `type` to which the given `type` is weak.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @param {object} weaknesses - An object where the keys are Pokemon types and the values are and array of the types of Pokemon to which the given type is weakened.
 * @param {string} type - A type as a string. (e.g. "Psychic")
 * @returns {Object[]} An array of unique Pokemon names where the at least one of its types is a `type` the passed in `type` is weakened by.
 *
 * EXAMPLE:
 *  getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, "Dragon");
 *  //> [
        "Dratini",
        "Dragonair",
        "Dragonite",
    ];
    *  getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, "copyright infringement");
 *  //> [];
 */
function getPokemonNamesMostEffectiveAgainstType(pokemon, weaknesses, type) {
  let weaknessesArray = [];

  if (weaknesses.hasOwnProperty(type)) {
    let specifiedEnemyType = weaknesses[type];

    for (let i = 0; i < specifiedEnemyType.length; i++) {
      for (let j = 0; j < pokemon.length; j++) {
        if (
          pokemon[j].type.includes(specifiedEnemyType[i]) &&
          !weaknessesArray.includes(pokemon[j].name)
        ) {
          weaknessesArray.push(pokemon[j].name);
        }
      }
    }
  } else {
    return `No Pokemon found of type: '${type}'.`;
  }
  console.log(weaknessesArray);
  return weaknessesArray;
}

module.exports = {
  filterByType,
  getPokemonNamesMostEffectiveAgainstType,
};

// console.log(weaknesses[category]);
// for (let i = 0; i < weaknesses[category].length; i++) {
//   console.log(weaknesses[category][i]);
//   if (weaknesses[category][i] === type) {
//     for (let j = 0; j < pokemon.length; j++) {
//       if (pokemon.type === weaknesses[category][i]) {
//         weaknessesArray.push(pokemon.name);
//       }
//     }
//   }
// }
// }
// return weaknessesArray;
