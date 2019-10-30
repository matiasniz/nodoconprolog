const swipl = require("swipl");
const { compound, list, serialize, variable } = swipl.term;

const pokemones = [];
pokemones.push(
  compound("pokemon2", ["bulbasaur", list(["grass", "poison"]), 49, 49])
);
pokemones.push(
  compound("pokemon", ["weedle", list(["bug", "poison"]), 45, 50])
);
pokemones.push(compound("pokemon", ["arbok", list(["poison"]), 95, 69]));
pokemones.push(
  compound("pokemon", ["nidoqueen", list(["poison", "ground"]), 90, 40])
);
pokemones.push(compound("pokemon", ["charmander", list(["fire"]), 52, 43]));
pokemones.push(compound("pokemon", ["charmeleon", list(["fire"]), 64, 58]));
pokemones.push(
  compound("pokemon", ["charizar", list(["fire", "flying"]), 84, 78])
);
pokemones.push(compound("pokemon", ["vulpix", list(["fire"]), 41, 40]));
pokemones.push(compound("pokemon", ["clefairy", list(["fairy"]), 45, 48]));
pokemones.push(
  compound("pokemon", ["jigglypuff", list(["normal", "fairy"]), 45, 20])
);
pokemones.push(compound("pokemon", ["squirtle", list(["water"]), 48, 65]));
pokemones.push(compound("pokemon", ["caterpie", list(["bug"]), 30, 35]));
pokemones.push(compound("pokemon", ["metapod", list(["bug"]), 52, 43]));
pokemones.push(
  compound("pokemon", ["butterfree", list(["bug", "flying"]), 45, 50])
);
pokemones.push(compound("pokemon", ["pikachu", list(["electric"]), 55, 40]));
pokemones.push(compound("pokemon", ["sandshrew", list(["ground"]), 90, 40]));

const lista = list(pokemones);

const query = new swipl.Query(
  `member(pokemon(X, [T | S], A, D), ${lista.toProlog()})`
);

let ret = null;
while ((ret = query.next())) {
  console.log(`X: ${ret.X} T: ${ret.T} S: ${ret.S} A: ${ret.A} D: ${ret.D}`);
}

let ret = null;

query.close();

// const lista = list([1, 2, 3, 4]);

// const query = new swipl.Query(`member('2', ${lista.toProlog()})`);

// while ((ret = query.next())) {
//   console.log(`X: ${ret.X}`);
// }
