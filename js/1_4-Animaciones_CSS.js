/*María Fernández Gilarte*/ 
//Selecciono los botones
let botonReanudar = document.getElementById("boton_reanudar");
let botonPausar = document.getElementById("boton_pausar");
//Selecciono el contendor
let contenedor = document.getElementById("ejercicio3");
//Selecciono todos los elementos del contenedor
let elementos = contenedor.querySelectorAll(".recuadro, .barra_dwec, .barra_dwes, .barra_diw, .barra_proy, .diagrama, .circulo, .icono");
/*Las animaciones no se heredan del padre a los hijos, cada elemento
tiene su propia animación independiente. Por eso necesito seleccionar
todos los elementos animados individualmente y pausarlos uno por uno.*/

//REANUDAR ANIMACION
function reanudar(){
    //Con for of recorro todos los elemetos dentro del contenedor y le doy la funcion de 
    //"correr"
    for (let elemento of elementos) {
        elemento.style.animationPlayState = "running";
    }
}
//Cuando el usuario hace click se activa la funcion reanudar
botonReanudar.addEventListener("click",reanudar);

//PAUSAR ANIMACION
function pausar(){
    //Igual que con reanudar
    for(let elemento of elementos){
        elemento.style.animationPlayState = "paused";
    }
}
botonPausar.addEventListener("click",pausar);
    
