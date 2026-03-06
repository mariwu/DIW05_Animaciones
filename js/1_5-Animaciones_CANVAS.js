/*María Fernández Gilarte */
//Selecciono el canva
let miCanva = document.getElementById("miCanva");
//Creo el contexto de miCanva para decirle que voy a dibujar cosas en 2d
let ctx = miCanva.getContext("2d");

//DIBUJAR EL TITULO 
ctx.font = "20px Arial"; //defino tamaño y tipo de letra
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Diagrama de barras", miCanva.width/2, 30);//Posicion del texto, la mitad del ancho del canva y 30 desde arriba

//DIBUJAR LAS BARRAS
//Creo un array de barras para meter los datos de las barras, su porcentaje, color y etiqueta
let barras = [
    { 
        porcentaje: 60, color: "#f10a31", etiqueta: "DWEC" 
    },
    { 
        porcentaje: 30, color: "#2ec720", etiqueta: "DWES" 
    },
    { 
        porcentaje: 50, color: "#faeb15", etiqueta: "DIW"  
    },
    {
        porcentaje: 80, color: "#5779d8", etiqueta: "PROY" 
    }
];

/*
En un principio lo hice asi, luego me di cuenta de que con un bucle for funcionaba igual
pintar las barras

// BARRA DWEC (60%)
let alto_dwec = (60 / 100) * miCanva.height * 0.8;
let x_dwec = 180;
let y_dwec = miCanva.height - alto_dwec;
ctx.fillStyle = "#f10a31";
ctx.fillRect(x_dwec, y_dwec, 60, alto_dwec);

// BARRA DWES (30%)
let alto_dwes = (30 / 100) * miCanva.height * 0.8;
let x_dwes = 260;
let y_dwes = miCanva.height - alto_dwes;
ctx.fillStyle = "#2ec720";
ctx.fillRect(x_dwes, y_dwes, 60, alto_dwes);

// BARRA DIW (50%)
let alto_diw = (50 / 100) * miCanva.height * 0.8;
let x_diw = 340;
let y_diw = miCanva.height - alto_diw;
ctx.fillStyle = "#faeb15";
ctx.fillRect(x_diw, y_diw, 60, alto_diw);

// BARRA PROY (80%)
let alto_proy = (80 / 100) * miCanva.height * 0.8;
let x_proy = 420;
let y_proy = miCanva.height - alto_proy;
ctx.fillStyle = "#5779d8";
ctx.fillRect(x_proy, y_proy, 60, alto_proy);

*/

//IMAGEN DE ESTRELLA
function dibujarEstrella(){
    let icono =  new Image();
    icono.src = "./imagenes/icono.png";
    //onload espera a que la imagen cargue antes de dibujarla
    icono.onload = function(){
        //Calculo la altura de la barra PROY 
        let alto_proy = (80 / 100) * miCanva.height * 0.8;
        //Calculo donde empieza la barra PROY
        let y_proy = miCanva.height - alto_proy;
        //Dibujo la imagen en el canvas con 4 parametros: la imagen, posicionX, posicionY, ancho y alto de la imagen
        ctx.drawImage(this, 415 + 15, y_proy + 5, 40, 40);  
    }
}

//Boton iniciar
let iniciar = document.getElementById("boton_iniciar");
//Al hacer click en el boton iniciar arranca setInterval
iniciar.addEventListener('click',function(){
    progreso = 0; // reinicio el progreso por si se pulsa varias veces
    intervalo = setInterval(animar, 40);
});
//Variable para controlar cuanto crecen las barras
let progreso=0;
//Variable que guardara el identificador del setInterval para poder pararlo
let intervalo;
//Funcion que animará las barras del diagrama
function animar() {
    //1.Se borra todo el canvas
    ctx.clearRect(0, 0, miCanva.width, miCanva.height);
    //2.Redibujo el título
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Diagrama de barras", miCanva.width / 2, 30);
    
    //3.Redibujo las barras con el progreso actual con un bucle for
    //Recorro el array que tengo creado antes para calcular las 4 barras de tiron
    for(let i = 0; i < barras.length; i++){
        let barra = barras[i];
        //Calculo la altura final igual que antes 
        let alturaFinal = (barra.porcentaje / 100) * miCanva.height * 0.8;
        //altura actual según el progreso
        let altura = alturaFinal * progreso;
        let x = 180 + i * 80;
        let y = miCanva.height - altura;
        ctx.fillStyle = barra.color;
        ctx.fillRect(x, y, 60, altura);
        //Escribo el porcentaje encima de la barra
        ctx.fillStyle = "black";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(barra.porcentaje + "%", x + 30, y - 5);
    }
    
    //Aumenta el progreso en cada barra. Como setInterval se ejecuta cada 40ms..
    progreso = progreso + 0.02;
    //Cuando el progreso llegue a 1... paro de dibujar
    if(progreso >= 1) {
        clearInterval(intervalo);
        dibujarEstrella();
    }
}
