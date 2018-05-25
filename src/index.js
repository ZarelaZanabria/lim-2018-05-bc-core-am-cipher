//DECLARAMOS TODAS LA VARIABLES 
//=========================== 
//Creamos una variable para obtener el texto de entrada del elemento textInput
let string    = document.getElementById('textInput');
//Creamos una variable para obtener la posicion del elemento position
let offset    = document.getElementById('position');
/*Creo un variable para que cuando al hacer click en el boton cifrar 
se ejecute un evento */
let btn_cifrar    = document.getElementById('cifrar');
/*Creo un variable para que cuando al hacer click en el boton descifrar 
se ejecute un evento  */
let btn_descifrar = document.getElementById('descifrar');

//CREAMOS LOS EVENTOS PARA LOS BOTONES CIFRAR Y DESCIFRAR
 
//EVENTO DEL BOTON CIFRAR
btn_cifrar.addEventListener('click', function(){
    //Creamos una variable output (SALIDA) donde me muestre el texto cifrado
    let output1 = window.cipher.encode(offset.value,string.value);
    document.getElementById('textOutput').innerHTML=output1;
})
//EVENTO DEL BOTON DESCIFRAR
btn_descifrar.addEventListener('click',function (){
     //Creamos una variable output (SALIDA) donde me muestre el texto descifrado
    let output = window.cipher.decode(offset.value,string.value);
    document.getElementById('textOutput').innerHTML = output;
});

