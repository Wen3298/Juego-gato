let Celda1 = document.getElementById("celda1")
let Celda2 = document.getElementById("celda2")
let Celda3 = document.getElementById("celda3")
let Celda4 = document.getElementById("celda4")
let Celda5 = document.getElementById("celda5")
let Celda6 = document.getElementById("celda6")
let Celda7 = document.getElementById("celda7")
let Celda8 = document.getElementById("celda8")
let Celda9 = document.getElementById("celda9")

let arreListas = [Celda1,Celda2,Celda3,Celda4,Celda5,Celda6,Celda7,Celda8,Celda9]

function juego(){
    arreListas.forEach(celdita=> celdita.addEventListener("click",function(){
        celdita.innerHTML= "x"
        juegoAleaotorio()    
    }))

}

function juegoAleaotorio() {
    let arreglosVacios = arreListas.filter(cel=>cel.innerHTML=="")
    let aleatorio = Math.floor(Math.random() * arreglosVacios.length)

    if(arreglosVacios.length>0){
        arreglosVacios[aleatorio].innerHTML = "O"
    }
}

juego()