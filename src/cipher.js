
/**
 * Window.cipher es un Objeto 
 * 1-CREAMOS DOS FUNCIONES DENTRO DEL OBJETO Window.cipher
 * 2.LA FUNCION ENCODE PERMITE HACER EL CIFRADO DEL TEXTO
 * 3.LA FUNCION DECODE PERMITE HACER EL DESCIFRADO DEL TEXTO
 */
window.cipher = {

  //CREAMOS LA FUNCION ENCODE PARA CIFRAR EL TEXTO
  encode : (offset,string) =>{
       
    offset = parseInt(offset);
    let codeCipher = "";
    for (let i=0; i<string.length;i++){
      //Creamos la variable numberCodeAscci para obtener el código ASCII del texto ingresado
      let numberCodeAscci = string.charCodeAt(i);
      //CONDICIÓN CUANDO LA LETRA ES MAYÚSCULA
      /**
       * 1-Ponemos una condición mayor que 65 y menor que 90 por que ahi se encuentran los
       * códigos ASCII de las letras mayúsculas.
       */
      if (numberCodeAscci >=65 && numberCodeAscci <=90) {
        /**
         * 1.Creamos la variable capitalLetter(LETRA MAYÚSCULA) 
         * 2.Primero obtenemos el codigo ASCII mediante la formula 
         * (numberCodeAscci-65+offset)%26+65 donde nos da un número
         * 3.Con el String.fromCharCode obtenemos la letra del código ASCII
         */
        let capitalLetter = String.fromCharCode((numberCodeAscci-65+offset)%26+65);
        //Concatenamos para formar la palabra
        codeCipher += capitalLetter;
      }
      //CONDICIÓN CUANDO LA LETRA ES MINÚSCULA
      /* 1-Ponemos una condición mayor que 97 y menor que 122 por que ahi se encuentran los
       códigos ASCII de las letras ninúsculas. */
      else if (numberCodeAscci>=97 && numberCodeAscci <=122){
        /**
         * 1.Creamos la variable letterLower(LETRA MINÚSCULAS)
         * 2.Primero obtenemos el codigo ASCII mediante la formula (numberCodeAscci-97+offset)%26+97 
         * en esta fórmula en vez del 65 ponemos 97 por que a partir de ese numero estan las letras
         * del ABCEDARIO en minúscula es por ello que cambiamos  el 65 por el 97 y dejamos 26 por que 
         * el número total de letras del ABCDARIO en minuscula o mayuscula siempre va ser 27 y como contamos la primera
         * letra A como 0 es por eso que a 27 le restamos 1 para que quede 26.
         * 3.Con el String.fromCharCode obtenemos la letra del código ASCII
         */
        //condicion para minuscula
        let letterLower = String.fromCharCode((numberCodeAscci-97+offset)%26+97);
        //Concatenamos para formar la palabra
        codeCipher +=letterLower;
      }
      //CONDICIÓN PARA LOS ESPACIOS EN BLANCO
        else if (numberCodeAscci ==32) {
        let space = " ";
        codeCipher += space;
      }
    }
    //AHORA VA RETORNAR LA PALABRA CIFRADA LA FUNCIÓN ENCODE
    return codeCipher;
  },
  //CREAMOS LA FUNCION DECODE PARA DESCIFRAR EL TEXTO
  decode : (offset,string) =>{
    offset = parseInt(offset);
    let decodeCipher = "";
    //CREAMOS UNA BUCLE FOR PARA PODER HACER UNA ITERACIÓN 
    for (let i = 0; i < string.length; i++) {
      //Creamos la variable numberCodeAscci para obtener el código ASCII del texto ingresado
      let numberCodeAscci = string.charCodeAt(i);
      //CONDICIÓN CUANDO LA LETRA ES MAYÚSCULA 
      /*1-Ponemos una condición mayor que 65 y menor que 90 por que ahi se encuentran los
        códigos ASCII de las letras mayúsculas. */
      if (numberCodeAscci >=65 && numberCodeAscci <=90) {
        /**
         * 1.Creamos la variable capitalLetter(LETRA MAYÚSCULA) 
         * 2.Primero obtenemos el codigo ASCII mediante la formula para descifrar
         * (numberCodeAscci+65-offset)%26+65 donde nos da un número.
         * 3.Con el String.fromCharCode obtenemos la letra del código ASCII
         */
        let capitalLetter = String.fromCharCode((numberCodeAscci+65-offset)%26+65);
        //Concatenamos para formar la palabra
        decodeCipher += capitalLetter;
      } 
       //CONDICIÓN CUANDO LA LETRA ES MINÚSCULA
      /* Ponemos una condición mayor que 97 y menor que 122 por que ahi se encuentran los
        códigos ASCII de las letras ninúsculas. */
      else if (numberCodeAscci>=97 && numberCodeAscci<=122) {
        /**
         * 1.Creamos la variable letterLower(LETRA MINÚSCULAS)
         * 2.Primero obtenemos el codigo ASCII mediante la formula (numberCodeAscci-97+offset)%26+97 
         * en esta fórmula en vez del 65 ponemos 97 por que a partir de ese numero estan las letras
         * del ABCEDARIO en MINÚSCULA es por ello que cambiamos  el 65 por el 97 y dejamos 26 por que 
         * el número total de letras del ABCDARIO en minúscula o mayúscula siempre va ser 27 y como contamos la primera
         * letra A como 0 es por eso que a 27 le restamos 1 para que quede 26.
         * 3.Con el String.fromCharCode obtenemos la letra del código ASCII
         */
        let letterLower = String.fromCharCode((numberCodeAscci+97-offset-12)%26+97);
        //concatenamos la nueva palabra
        decodeCipher += letterLower;
              
      }
      //CONDICIÓN PARA LOS ESPACIOS EN BLANCO
      else if (numberCodeAscci == 32) {
        //Creamos un variable espacio para poder igual el espacio en blanco a otro espacio en blanco 
        let space = "";
        //Y que este espacio se concatene en el texto.
        decodeCipher += space;
      }
      
    }
    //AHORA VA RETORNAR LA PALABRA DESCIFRADA LA FUNCIÓN DECODE
    return decodeCipher;
  },

   createCipherWithOffset : (offset)=>{
     //Creamos el Objeto Resultado
     const resultado = {
       /*1.Creamos las propiedades del Objeto encode y decode
        2. La propiedad encode es un método para cifrar, entonces se debe crear una  funcion ENCODE. 
        3. La propiedad DECODE es un método para descifrar, entonces se debe crear una  funcion DECODE. */
       encode : (string)=>{
         cipher.encode (offset,string);
       },       
       decode : (string)=>{
         cipher.decode(offset,string);
       }
     }

     return resultado ;
    }
    
  };

