// DOM Elements
const button1 = document.getElementById("button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.getElementById("button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const texto = document.querySelector("#texto");
const textoPelea = document.querySelector("#textoPelea");
const Listamagias = document.querySelector("#Listamagias");
const vidaJugador = document.querySelector("#vidaJugador");
const dineroJugador = document.querySelector("#dineroJugador");
const experienciaJugador = document.querySelector("#experienciaJugador");
const claseJugador = document.querySelector("#claseJugador");
const class_pelea = document.querySelector("#class_pelea");
const titulo = document.querySelector("#titulo");
const Listainventario = document.querySelector("#inventario");
const saludMonstruo = document.querySelector("#saludMonstruo");
const nombreMonstruo = document.querySelector("#nombreMonstruo");

// Player Stats
let xp = "";
let vida = 0;
let dinero = 50;
let UbiActual;
let Inventario= [

]


// Locations Data
const locations = [
    {
        Nombre: "El Bosque maldito", 
        botones: ["Norte", "Sur", "Este"],
        "botones funcion": [Bosque_Norte, Bosque_Sur, Bosque_Este],
        text: "Te encuentras en un bosque aparentemente tranquilo, la vegetación se mueve, los pájaros cantan y una niebla densa te rodea, ¿qué haces?"
    },
    {
        Nombre: "El Bosque maldito Norte", 
        botones: ["Atras", "Norte", "Entrar"],
        "botones funcion": [inicio, Bosque_Norte2, Casita],
        text: "Sigues en el bosque, tienes el camino trasero para volver hacia atras, tienes un camino al frente lleno de hojas , y una casita de madera al lado de un gran hongo, ¿que haces?"
    },
    {
        Nombre: "El Bosque maldito Sur", 
        botones: ["Atras", "Norte", "Entrar"],
        "botones funcion": [inicio, Bosque_Norte2, Casita],
        text: "Sigues en el bosque, tienes el camino trasero para volver hacia atras, tienes un camino al frente lleno de hojas , y una casita de madera al lado de un gran hongo, ¿que haces?"
    },
    {
        Nombre: "El Bosque maldito Este", 
        botones: ["Atras", "Norte", "Entrar"],
        "botones funcion": [inicio, Bosque_Norte2, Casita],
        text: "Sigues en el bosque, tienes el camino trasero para volver hacia atras, tienes un camino al frente lleno de hojas , y una casita de madera al lado de un gran hongo, ¿que haces?"
    },
    {
        Nombre: "El Gran Lago", 
        botones: ["Agua", "Agua", "Atras"],
        "botones funcion": [Agua, Agua, Bosque_Norte],
        text: "Tras atravesar unas grandes hojas te encuentras con un gran lago. ¿Qué haces?"
    },
    {
        Nombre: "La Casita", 
        botones: ["Atras", "Dormir", "Coger"],
        "botones funcion": [Bosque_Este,Agua,Agua],
        text: "Entras en la casita del hongo, encuentras un gnomo muy amable que te pregunta: ¿Qué haces aquí pequeño? No tendrías que estar por aquí... Ven, toma esto, has conseguido el hacha brillante."
    },
];

const attacks = [

    { 
        Nombre: "Campo de Batalla",
        
        botones: ["Atacar", "Magia", "Huir"],
        "botones funcion": [Atacar, Magia, Huir],
        text: "Te has encontrado un enemigo, que haces??"

    }



];

function AñadirObjeto(item) {
    Inventario.push(item);
    actualizarInventario();
}

function actualizarInventario() {
    Listainventario.innerHTML = '';
    Inventario.forEach(elemento => {
        const li = document.createElement('li');
        li.className = 'Objeto'; 
        li.textContent = elemento;
        Listainventario.appendChild(li);
    });
}

function Atacar() {
    
    console.log("Atacar")
    vidaMonstruo= saludMonstruo.innerText 
    vida= vidaJugador.innerText
    function obtenerObjetoDelInventario(nombreObjeto) {
        return Objetos.find(obj => obj.Nombre === nombreObjeto);
    }
    let item = obtenerObjetoDelInventario(Inventario[0]);
    Daño=item.Ataque
    console.log(Daño)
    
    TipoJugador= claseJugador.innerText
    let dic = clases.find(clase => clase.nombre === TipoJugador);
    if (dic) {
        Fuerza=dic.Fuerza;
        
    }

    console.log(Fuerza)
    Resta= Math.round(Math.random()* Daño + (Fuerza /2))
    vidaMonstruo -= Resta ;
    if ( vidaMonstruo >= 0){
        
        console.log(vidaMonstruo)
        saludMonstruo.innerText = vidaMonstruo
        texto.innerHTML = "Has atacado al "+ nombreMonstruo.innerText +" con tu "+ item.Nombre + " le has quitado " + Resta;
        ataqueEnemigo= Math.round(Math.random()* fuerzaEnemigo +2);
        vida -= ataqueEnemigo
        vidaJugador.innerText = vida
        texto.innerHTML += "  \n Te ha atacado el enemigo y te ha quitado "+ ataqueEnemigo ;



    }
    else {
      Acabar();
    }


}
function Magia() {
    console.log("Magia")

    Magias();    

    
}
function Huir() {
    console.log("Huir")
    class_pelea.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    ubicacion(UbiActual);
    
}



// Classes Data
const clases = [
    { nombre: "Guerrero", Vida: 100, Fuerza: 10, Magia: 2 },
    { nombre: "Mago", Vida: 80, Fuerza: 2, Magia: 10 },
    { nombre: "Ladrón", Vida: 50, Fuerza: 4, Magia: 4 },
];

const enemigos = [
    { name: "slime", level: 2, health: 15 },
    { name: "fanged beast", level: 8, health: 60 },
    { name: "goblin", level: 4, health: 30},
    {name: "skeleton", level: 3, health: 22}
];
const Objetos=[
    {
        Nombre: "Espada",
        Ataque: 10,
        Magia: 0

    },
    {
        Nombre: "Baston",
        Ataque: 2,
        Magia: 10

    },
    {
        Nombre: "Daga",
        Ataque: 5,
        Magia: 5

    }
]

const listadeMagias= [
    {

        Nombre:"Fuego",
        Daño: 10
    },
    {
        Nombre:"Hielo",
        Daño: 10
    }
    ,{
        
    }
]
// Class Selection Handlers
button1.onclick = Guerrero;
button2.onclick = Mago;
button3.onclick = Ladron;

function Guerrero() {
    vida = clases[0].Vida;
    Nombreclase = clases[0].nombre;
    vidaJugador.innerText = vida;
    claseJugador.innerText = Nombreclase;
    AñadirObjeto(Objetos[0].Nombre);
    inicio();
    UbiActual = locations[0]; 
 // Inicializa en la ubicación inicial
}

function Mago() {
    vida = clases[1].Vida;
    Nombreclase = clases[1].nombre;
    vidaJugador.innerText = vida;
    claseJugador.innerText =  Nombreclase ;
    AñadirObjeto(Objetos[1].Nombre);
    inicio();
    UbiActual = locations[0]; // Inicializa en la ubicación inicial
}

function Ladron() {
    vida = clases[2].Vida;
    Nombreclase = clases[2].nombre;
    vidaJugador.innerText = vida;
    claseJugador.innerText =  Nombreclase ;
    AñadirObjeto(Objetos[2].Nombre);
    inicio();
    UbiActual = locations[0]; // Inicializa en la ubicación inicial
}


function Acabar(){
    dinero = Math.floor( Math.round( Math.random( )*fuerzaEnemigo+2))
    console.log( "dinero a añadir"+ dinero)
    let MoneyPlayer = parseInt(dineroJugador.innerHTML, 10) 

    MoneyPlayer += dinero;
    console.log( "dinero a añadir"+ MoneyPlayer)
    dineroJugador.innerHTML  = MoneyPlayer
  
    class_pelea.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    ubicacion(UbiActual);
    
 

    
}
function Enemigos() {
    ubicacion(attacks[0])
 
    var fighting = Math.floor(Math.random() * enemigos.length); // Genera índice aleatorio para enemigos
    saludMonstruo.innerText = enemigos[0].health;
    class_pelea.style.display = "block";
    nombreMonstruo.innerText = enemigos[fighting].name;
    fuerzaEnemigo= enemigos[fighting].level;
    
}




// Initialize Location
function inicio() {
    ubicacion(locations[0]); // Inicializa en la ubicación inicial
}

function Bosque_Norte() {
    ubicacion(locations[1]);
    UbiActual = locations[1]; 
}

function Bosque_Sur() {
    ubicacion(locations[2]);
    UbiActual = locations[2]; 
}

function Bosque_Este() {
    ubicacion(locations[3]);
    UbiActual = locations[3]; 
}

function Bosque_Norte2() {
    ubicacion(locations[1]);
    UbiActual = locations[1]; 
}

function Agua() {
    ubicacion(locations[4]);
    UbiActual = locations[4]; 
}

function Casita() {
    ubicacion(locations[5]);
    UbiActual = locations[5]; 
}

// Update UI for Location
function ubicacion(location) {
    var num = Math.floor(Math.random() * 10) + 1;
    if (num % 2 === 0) {
        class_pelea.style.display = "none";
        button1.innerText = location.botones[0];
        button2.innerText = location.botones[1];
        button3.innerText = location.botones[2];
        button1.onclick = location["botones funcion"][0];
        button2.onclick = location["botones funcion"][1];
        button3.onclick = location["botones funcion"][2];
        texto.innerHTML = location.text;
        titulo.innerHTML = location.Nombre;
    } else {
        Enemigos();
    }
}



function  Magias() {
    button4.style.display = "block";
    button5.style.display = "block";
    button4.innerText = listadeMagias[0].Nombre;
    button5.innerText = listadeMagias[1].Nombre;
        

   
       
}
