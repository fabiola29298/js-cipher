
import cipher from './cipher.js';


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
    // call function
    let newMessage = cipher.encode(parseInt(offSet.value), textArea.value);
    // show new message
    result.value = newMessage;

  }
});
btnDecrypt.addEventListener('click', () => {
  if (offSet.value === "" || textArea.value === "") {
    alert("Ingresa los datos")
  }
  else {
    // call function
    let newMessage = cipher.decode(parseInt(offSet.value), textArea.value);
    // show new message
    result.value = newMessage;

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

btnSend.addEventListener('click', () => {
  console.log('gola');
  var yourNumber = "558186580524";
  var yourMessage = "testing";
  let url = getLinkWhastapp(yourNumber, yourMessage);
  window.open(url, '_blank').focus();
  // var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
});

function getLinkWhastapp(number, message) {
  var url =
    "https://api.whatsapp.com/send?phone=" +
    number +
    "&text=" +
    encodeURIComponent(message);

  return url;
}