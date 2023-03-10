const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//Una serie de objetos Pokémon donde la identificación es divisible por 3:
const divisibleListPkmn = pokemon.filter( p => p.id%3==0);
console.log(divisibleListPkmn);
//Una serie de objetos Pokémon que son del tipo "fuego"
const fireListPkmn = pokemon.filter( p => p.types.includes('fire'));
console.log(fireListPkmn);
//Una variedad de objetos Pokémon que tienen más de un tipo
const twotypesListPkmn = pokemon.filter( p => p.types.length==2);
console.log(twotypesListPkmn);
//una matriz con solo los nombres de los Pokémon
const namesListPkmn = pokemon.map( p => p.name);
console.log(namesListPkmn);
//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const numberListPkmn = pokemon.filter(p => p.id>99).map(p => p.namesListPkmn);
console.log(numberListPkmn);
//una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const poisonListPkmn = pokemon.filter(p => p.types=='poison').map(p => p.name);
console.log(poisonListPkmn);
//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const flyingListPkmn = pokemon.filter( p => p.types[1]=='flying').map(p => p.types[0]);
console.log(flyingListPkmn);
//un recuento de la cantidad de pokémon que son de tipo "normal"
const normalPkmn= pokemon.filter(p => p.types.includes("normal"));
console.log(normalPkmn.length)