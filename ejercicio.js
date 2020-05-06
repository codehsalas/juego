let juego = ['piedra','papel','tijeras','lagarto','spock'];
var azar = Math.floor(Math.random()* juego.length);

var eleccion = prompt("Favor elije tu opcion: Piedra, Papel, Tijeras, Lagarto o spock");
eleccion = eleccion.toLowerCase();
console.log("Tu eleccion fue: " + eleccion);
console.log("La Eleccion del sistema fue " + juego[azar]);


//INICIO BLOQUE TIJERAS
if(eleccion =='tijeras' && juego[azar] == 'papel'){ 
        console.log("Tu Ganaste");
}else if(eleccion =='tijeras' && juego[azar] == 'lagarto'){
    console.log("Tu Ganaste");
}else if(eleccion =='tijeras' && juego[azar] == 'piedra'){
    console.log("Tu Pierdes");
}else if(eleccion =='tijeras' && juego[azar] == 'spock'){
    console.log("Tu Pierdes");
}else if (eleccion =='tijeras' && juego[azar] == 'tijeras'){
    console.log("Empate");
}//FIN BLOQUE TIJERAS

//INICIO BLOQUE PAPEL
if(eleccion =='papel' && juego[azar] == 'piedra'){ 
    console.log("Tu Ganaste");
}else if(eleccion =='papel' && juego[azar] == 'spock'){
console.log("Tu Ganaste");
}else if(eleccion =='papel' && juego[azar] == 'tijeras'){
console.log("Tu Pierdes");
}else if(eleccion =='papel' && juego[azar] == 'lagarto'){
console.log("Tu Pierdes");
}else if (eleccion =='papel' && juego[azar] == 'papel'){
console.log("Empate");
}//FIN BLOQUE TIJERAS

//INICIO BLOQUE PIEDRA
if(eleccion =='piedra' && juego[azar] == 'tijeras'){ 
    console.log("Tu Ganaste");
}else if(eleccion =='piedra' && juego[azar] == 'lagarto'){
console.log("Tu Ganaste");
}else if(eleccion =='piedra' && juego[azar] == 'stock'){
console.log("Tu Pierdes");
}else if(eleccion =='piedra' && juego[azar] == 'papel'){
console.log("Tu Pierdes");
}else if (eleccion =='piedra' && juego[azar] == 'piedra'){
console.log("Empate");
}//FIN BLOQUE PIEDRA

//INICIO LAGARTO
if(eleccion =='lagarto' && juego[azar] == 'spock'){ 
    console.log("Tu Ganaste");
}else if(eleccion =='lagarto' && juego[azar] == 'papel'){
console.log("Tu Ganaste");
}else if(eleccion =='lagarto' && juego[azar] == 'tijeras'){
console.log("Tu Pierdes");
}else if(eleccion =='lagarto' && juego[azar] == 'piedra'){
console.log("Tu Pierdes");
}else if (eleccion =='lagarto' && juego[azar] == 'lagarto'){
console.log("Empate");
}//FIN BLOQUE LAGARTO

//INICIO SPOCK
if(eleccion =='spock' && juego[azar] == 'tijeras'){ 
    console.log("Tu Ganaste");
}else if(eleccion =='spock' && juego[azar] == 'piedra'){
console.log("Tu Ganaste");
}else if(eleccion =='spock' && juego[azar] == 'papel'){
console.log("Tu Pierdes");
}else if(eleccion =='spock' && juego[azar] == 'lagarto'){
console.log("Tu Pierdes");
}else if (eleccion =='spock' && juego[azar] == 'spock'){
console.log("Empate");
}//FIN BLOQUE SPOCK