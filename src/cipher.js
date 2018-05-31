window.cipher = {
  encode: (offset, string) => {
    offset = parseInt(offset);
    let codeCipher = "";
    for (let i = 0; i < string.length; i++) {
      let numberCodeAscci = string.charCodeAt(i);
      
      if (numberCodeAscci >= 65 && numberCodeAscci <= 90) {
        let capitalLetter = String.fromCharCode((numberCodeAscci - 65 + offset) % 26 + 65);
        codeCipher += capitalLetter;
      }
      else if (numberCodeAscci >= 97 && numberCodeAscci <= 122) {
        let letterLower = String.fromCharCode((numberCodeAscci - 97 + offset) % 26 + 97);
        codeCipher += letterLower;
      }
      else if (numberCodeAscci == 32) {
        let space = " ";
        codeCipher += space;
      }
    }
   return codeCipher;
  },
 
  decode: (offset, string) => {
    offset = parseInt(offset);
    let decodeCipher = "";
    for (let i = 0; i < string.length; i++) {
      let numberCodeAscci = string.charCodeAt(i);
      if (numberCodeAscci >= 65 && numberCodeAscci <= 90) {
        let capitalLetter = String.fromCharCode((numberCodeAscci + 65 - offset) % 26 + 65);
        decodeCipher += capitalLetter;
      }
      else if (numberCodeAscci >= 97 && numberCodeAscci <= 122) {
        let letterLower = String.fromCharCode((numberCodeAscci + 97 - offset - 12) % 26 + 97);
        decodeCipher += letterLower;
      }
      else if (numberCodeAscci == 32) {
        let space = " ";
        decodeCipher += space;
      }

    }
    return decodeCipher;
  },

  createCipherWithOffset: (offset) => {
     let result = {
      //Método  encode 
      encode: (string) => cipher.encode(offset, string),
      //Método decode 
      decode: (string) => cipher.decode(offset, string)
      
    }
    return result;
    
  }


};







