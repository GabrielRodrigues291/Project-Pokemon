const valueInput = document.querySelector("#value");
const next = document.querySelector("#next");
const back = document.querySelector("#back");
const namePokemon = document.querySelector(".name");
const img = document.querySelector("img");
const idPokemon = document.querySelector(".number");
var value = 1;

async function getPokemon(pokemon) {
  namePokemon.innerHTML = "Searching...";
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((req) => req.json())
    .then((dados) => {
      value = `${dados.id}`;
      idPokemon.innerHTML = `${dados.id}`;
      namePokemon.innerHTML = `${dados.name}`;
      img.src = `${dados["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]}`;
    })
    .catch((error) => {
      console.log("Deu Erro: " + error);
      namePokemon.innerHTML = "Not Exists =[";
    });
}

document.querySelector("body").addEventListener("keydown", (keyClicada) => {
  if (keyClicada.key == "Enter") {
    getPokemon(document.querySelector("#value").value.toLowerCase());
  }
});

next.addEventListener("click", () => {
  value = parseInt(value) + 1;
  getPokemon(value);
});

back.addEventListener("click", () => {
  value = parseInt(value) - 1;
  getPokemon(value);
});

if (namePokemon.value == undefined) {
  getPokemon(value);
}
