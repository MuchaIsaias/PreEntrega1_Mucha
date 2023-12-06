// VARIABLES
const piedra = 1
const papel = 2
const tijeras = 3
const Rendirse = 4
let jugador1rondasganas=0
let jugador2rondasganas=0
let Empates = 0

alert("Binevenidos al Simulador de Papel, Piedra y Tijeras :D");

//NOMBRE DEL JUGADOR 1 Y 2

let jugador1 =Nombres("Por favor Ingrese el Nombre del Jugador Nº 1");

alert("Bienvenido " + jugador1);

let jugador2 = Nombres("Por favor Ingrese el Nombre del Jugado Nº 2").toUpperCase()

if (jugador2 == jugador1) {
    while (true) {
        jugador2 =prompt("Por favor Jugador 2 Cambie de Nombre").toUpperCase()
        if (jugador2 !== jugador1 && jugador2 !=="" && jugador2 !==" ") {
            break;
        }
    }
};

alert("Bienvenido " + jugador2);

//RONDAS QUE EL USUARIO DESEA JUGAR PARA GANAR

let cuantasrondas =Number(prompt("Eligan Cuantas rondas Tiene que Ganar un Jugador Para Ganar La Partida"))

if (isNaN(cuantasrondas) || cuantasrondas <=0) {
    while (true) {
        cuantasrondas =Number(prompt("Eligan Cuantas rondas Tiene que Ganar un Jugador Para Ganar La Partida"))
        if (cuantasrondas =Number && cuantasrondas >= 1) {
            break;
        }
    }
};

alert("Listos Empezemos el Juego, Buena suerte a Los Dos Jugadores "+jugador1 +" y " + jugador2);

// BUCLE QUE INICIA EL JUEGO, HASTA QUE EL USUARIO QUIERA TERMINAR

for (let rondas = 1; rondas <=100; rondas++) {
    alert("Ronda Nº " + rondas);
    
    let Jugadasjugador1 =empezarJuego("Por favor "+jugador1+" Eliga Entre \n 1. Piedra \n 2. Papel \n 3. Tijeras \n 4. Rendirse");
    
    if (Jugadasjugador1 == Rendirse){
        alert("Felicidades "+jugador2+" Usted a Ganado La Partida por que el jugador1 se a Rendido")
        alert("Se han jugado un total de "+rondas+" Rondas"+" El jugador "+jugador2+" a ganado un Total de "+jugador2rondasganas+" a Perdido un Total de "+jugador1rondasganas+" y a Empatadon un total de "+Empates)
        if (!confirm("Quieren Jugar otra Prtida")) {
            break
        }else{
            rondas = 0
        }
    }
    let Jugadasjugador2 =empezarJuego("Por favor "+jugador2+" Eliga Entre \n 1. Piedra \n 2. Papel \n 3. Tijeras \n 4. Rendirse");
    
// JUGADAS POSIBLES Y PUNTOS QUE SE REPARTEN ENTRE LOS JUGADORES

    if (Jugadasjugador1 == piedra && Jugadasjugador2 == tijeras || Jugadasjugador2 == tijeras && Jugadasjugador1 == piedra) {
        alert("Felicidade Ganador jugador "+jugador1);
        jugador1rondasganas++
    }else if (Jugadasjugador1 == papel && Jugadasjugador2 == piedra||Jugadasjugador2 == piedra && Jugadasjugador1 == papel) {
        alert("Felicidade Ganador jugador "+jugador1);
        jugador1rondasganas++
    }else if (Jugadasjugador1 == tijeras && Jugadasjugador2 == papel||Jugadasjugador2 == papel && Jugadasjugador1 == tijeras) {
        alert("Felicidade Ganador jugador "+jugador1);
        jugador1rondasganas++
    }else if (Jugadasjugador2 == piedra && Jugadasjugador1 == tijeras||Jugadasjugador1 == tijeras && Jugadasjugador2 == piedra) {
        alert("Felicidade Ganador jugador "+jugador2);
        jugador2rondasganas++
    }else if (Jugadasjugador2 == papel && Jugadasjugador1 == piedra||Jugadasjugador1 == piedra && Jugadasjugador2 == papel) {
        alert("Felicidade Ganador jugador "+jugador2);
        jugador2rondasganas++
    }else if (Jugadasjugador2 == tijeras && Jugadasjugador1 == papel||Jugadasjugador1 == papel && Jugadasjugador2 == tijeras) {
        alert("Felicidade Ganador jugador "+jugador2);
        jugador2rondasganas++
    }else if (Jugadasjugador1 == piedra && Jugadasjugador2 == piedra){
        alert("Empate Por Favor Sigan ");
        Empates++
    }else if (Jugadasjugador1 == papel && Jugadasjugador2 == papel) {
        alert("Empate Por Favor Sigan ");
        Empates++
    }else if (Jugadasjugador1 == tijeras && Jugadasjugador2 == tijeras){
            alert("Empate Por Favor Sigan ");
            Empates++
    }else{
        alert("Felicidades "+jugador1+" Usted a Ganado La Partida por que el jugador2 se a Rendido")
        console.log("Se han jugado un total de "+rondas+" Rondas"+" El jugador "+jugador1+" a ganado un Total de "+jugador1rondasganas+" a Perdido un Total de "+jugador2rondasganas+" y a Empatadon un total de "+Empates)
        if (!confirm("Quierens seguir Jugando")) {
            break
        }else{
            rondas = 0
        }
    }
// SI UNO LE LOS DOS JUGADORES LLEGA A UNA CANTIDAD DE PUENTOS O SI SE RINDE EL OTRO GANAA
    if (jugador1rondasganas == cuantasrondas || jugador2rondasganas==cuantasrondas) {
        if (jugador1rondasganas>jugador2rondasganas){
            alert("Felicidades "+jugador1+" Usted a Ganado La Partida")
            alert("Se han jugado un total de "+rondas+" Rondas"+" El jugador "+jugador1+" a ganado un Total de "+jugador1rondasganas+" a Perdido un Total de "+jugador2rondasganas+" y a Empatadon un total de "+Empates)
            if (!confirm("Quierens seguir Jugando")) {
                break
            }else{
                rondas = 0
            }
        }else {
            alert("Felicidades "+jugador2+" Usted a Ganado La Partida")
            alert("Se han jugado un total de "+rondas+" Rondas"+" El jugador "+jugador2+" a ganado un Total de "+jugador2rondasganas+" a Perdido un Total de "+jugador1rondasganas+" y a Empatadon un total de "+Empates)
            if (!confirm("Quierens seguir Jugando")) {
                break
            }else{
                rondas = 0
            }
        }
    };
};

// FUNCTION  DE JUGADAS PERMITIDAS

function empezarJuego(Jugadas) {
    let jugadores =prompt(Jugadas)
    if (jugadores != piedra && jugadores != papel && jugadores !=tijeras && jugadores != Rendirse){
        while (true) {
            jugadores =prompt(Jugadas) 
            if (jugadores == piedra && jugadores !== " " && jugadores !=="") {        
            break
            }else if (Jugadasjugador1 == papel && jugadores !== " " && jugadores !=="") {
                break
            }else if (jugadores == tijeras && jugadores !== " " && jugadores !==""){
                break
            }else if (jugadores == Rendirse && jugadores !== " " && jugadores !==""){
                break
            }
        }
    }
    return jugadores
};

// FUNCTION  DE NOMBRE

function Nombres(Erores) {
    let nombre = prompt(Erores).toUpperCase()
    if (nombre == "" || nombre == " ") {
        while (true) {
            nombre = prompt(Erores).toUpperCase()
            if (nombre !== "" && nombre !==" ") {
                break;
            }
        }
    }return nombre
};