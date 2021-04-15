
const cipher = {
  encode: function (key, text) {
    if( typeof(text) != "string" || typeof(key)!= "number"){
      throw new TypeError("El texto no es válido");
    }

    let encryptToMessage = ""; // new message
    for (let i = 0; i < text.length; i++) {
      let charAscii = text.charCodeAt(i); // convert letters to unicodes
      let newKey = key ;  // key change if charAscii is symbol or letter

      // catch offset negativo
      // if uppercase or lowercase
      if (key < 0 && charAscii >= 65) { newKey = key + 26; }
      // if symbols
      if (key < 0 && charAscii < 65) { newKey = key + 33; }


      if (charAscii >= 65 && charAscii <= 90) {
        // uppercase letter range
        encryptToMessage += String.fromCharCode(((charAscii - 65 + parseInt(newKey)) % 26) + 65);
      }
      else if (charAscii >= 97 && charAscii <= 122) {
        // lower case letter range
        encryptToMessage += String.fromCharCode(((charAscii - 97 + parseInt(newKey)) % 26) + 97);
      }
      else if (charAscii >= 32 && charAscii <= 64) {
        // symbols range
        encryptToMessage += String.fromCharCode(((charAscii - 32 + parseInt(newKey)) % 33) + 32);
      } else {
        //different signs and characters are copied
        encryptToMessage += text.charAt(i);
      }
    }
    return encryptToMessage;
  },

  decode: function (key, text) {
    if (typeof (text) != "string" || typeof (key) != "number") {
      throw new TypeError("El texto no es válido");
    }

    let encryptToMessage = ""; // new message
    for (let i = 0; i < text.length; i++) {
      let charAscii = text.charCodeAt(i); // convert letters to unicodes
      let newKey = key;  // key change if charAscii is symbol or letter

      // catch offset negativo
      // if uppercase or lowercase
      if (key < 0 && charAscii >= 65) { newKey = key + 26; }
      // if symbols
      if (key < 0 && charAscii < 65) { newKey = key + 33; }


      if (charAscii >= 65 && charAscii <= 90) {
        // uppercase letter range
        encryptToMessage += String.fromCharCode(((charAscii - 90 - parseInt(newKey)) % 26) + 90);
      }
      else if (charAscii >= 97 && charAscii <= 122) {
        // lower case letter range
        encryptToMessage += String.fromCharCode(((charAscii - 122 - parseInt(newKey)) % 26) + 122);
      }
      else if (charAscii >= 32 && charAscii <= 64) {
        // symbols range
        encryptToMessage += String.fromCharCode(((charAscii - 64 - parseInt(newKey)) % 33) + 64);
      } else {
        //different signs and characters are copied
        encryptToMessage += text.charAt(i);
      }
    }
    return encryptToMessage;
  }
};

export default cipher;