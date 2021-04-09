
import cipher from './cipher.js';

console.log(cipher);

let offSet = document.getElementById("offSet");
let textArea = document.getElementById("textArea");
let result = document.getElementById("result");

const btnEncrypt = document.getElementById("encryptButton");
const btnDecrypt = document.getElementById("decryptButton");

const btnCopy = document.getElementById("copyButton");
const btnSend = document.getElementById("whatsappButton");
const btnExchange = document.getElementById("exchangeButton");



btnEncrypt.addEventListener('click', () => {
  if (offSet.value === "" || textArea.value === "" ){
    alert("Ingresa los datos")
  }
  else{
    textArea.value = textArea.value.toUpperCase();
    // call function
    // let newMessage =
    let newMessage = textArea.value.toLowerCase();
    // show new message
    result.value = newMessage;
    console.log(offSet.value);
    console.log(textArea.value);

  }
});

btnExchange.addEventListener('click', () => {
  if (result.value === "") {
    alert("No se puede invertir, ingrese datos")
  }
  else {
    textArea.value = result.value;
    result.value = "";
  }
});

btnCopy.addEventListener('click', () => {
  /* Select the text field */
  result.select();
  result.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + result.value;
  // alert("Copied the text: " + result.value);
});