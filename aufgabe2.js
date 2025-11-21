// === strict equality (vergleicht Wert und Datentyp)
// == loose equality (vergleichert nur den Wert)
// let (Blockscope) Wert kann neu zugewiesen werden
// var (Globalscope) Kann neu zugewiesen und erneut deklariert werden
let genre = "pop";

if (genre === "rock") {
  console.log("Gitarren an! Heute gibt's Rock.");
} else if (genre === "hiphop") {
  console.log("Bass aufdrehen – es läuft Hip-Hop!");
} else {
  console.log("Entspannte Vibes – wir hören etwas anderes.");
}

switch (genre) {
  case "rock":
    console.log("Gitarren an! Heute gibt's Rock.");
    break;

  case "hiphop":
    console.log("Bass aufdrehen – es läuft Hip-Hop!");
    break;

  default:
    console.log("Entspannte Vibes – wir hören etwas anderes.");
}

var t = 3

if (typeof(t)==="number") {console.log("yes");  }

switch(typeof(t)){
    case "string": console.log("string"); break;
    case "number": console.log("number"); break;
    case "boolean": console.log("boolean");
    default: console.log("default");  }

for (let i = 0; i < 3; i++) {
  console.log("Track Nummer: " + i);
}

let streams = 5;

while (streams > 0) {
  console.log("Spiele Song erneut …");
  streams--;
}


var message = "message";
var encoded = "";

for (var i = 0; i < message.length; i++) {
  encoded = encoded + "0x" + message.charCodeAt(i).toString(16);
}

console.log(encoded);

var encoded = "0x6d0x650x730x730x610x670x65";
var decoded = "";

var parts = encoded.split("0x");

for (var i = 0; i < parts.length; i++) {
  if (parts[i] !== "") {
    decoded += String.fromCharCode(parseInt(parts[i], 16));
  }
}

console.log(decoded);





