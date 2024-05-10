import { getAdat } from "./async.js";

//getAdat("adatok.json", megjelenit);
getAdat("https://pokeapi.co/api/v2/pokemon/ditto", megjelenitPokemon);

function megjelenit(adat) {
    $("body").append(`<h2>${adat.termekek[0].nev}</h2>`)
}

function megjelenitPokemon(adat) {
    $("body").append(`<h2>Pokemonok<h2>`)
    $("body").append(`<h1>${adat.name}<h1>`)
    $("body").append(`<img style="width:300px" src="${adat.sprites.front_default}" alt="${adat.name}">`)
}