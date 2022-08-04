

const tituloCard1 = document.getElementById('card1');
const tituloCard2 = document.getElementById('card2');

const h3element = document.createElement("h3");
const h3element2 = document.createElement("h3");

function traerNombre1(){

fetch("https://rickandmortyapi.com/api/character/5")
    .then((response)=>response.json())
    .then((json)=> h3element.innerHTML = (json.name))

}

function traerNombre2(){

    fetch("https://rickandmortyapi.com/api/character/42")
        .then((response)=>response.json())
        .then((json)=> h3element2.innerHTML = (json.name))
    
    }

traerNombre1();
traerNombre2();

tituloCard1.append(h3element);
tituloCard2.append(h3element2);
