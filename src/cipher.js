
const cipher = {
  encode: function (key, text) {
    if( typeof(text) != "string" || typeof(key)!= "number"){
      throw new TypeError("El texto no es válido");
    }

    let encryptToMessage = ""; // new message
    for (let i = 0; i < text.length; i++) {
      let charAscii = text.charCodeAt(i); // convert letters to unicodes
      if (charAscii >= 65 && charAscii <= 90) {
        // uppercase letter range
        encryptToMessage += String.fromCharCode(
          ((charAscii - 65 + parseInt(key)) % 26) + 65);
        // console.log(encryptToMessage);
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
      let charAscii = text.charCodeAt(i);
      if (charAscii >= 65 && charAscii <= 90 ) {
        encryptToMessage += String.fromCharCode(
          ((charAscii + 65 - parseInt(key)) % 26) + 65);
      }
    }
    return encryptToMessage;
  }
};

export default cipher;