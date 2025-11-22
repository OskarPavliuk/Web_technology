// ----------------------------
//        ARRAYS
// ----------------------------

// Array initialisieren
let array = [];

// Erstes Element hinzufügen
array[0] = 1;

// Element am Ende hinzufügen
array.push(2);

// Weiteres Array erstellen
let array_2 = [3, 4, 5];

// Arrays verschmelzen
let array_3 = array.concat(array_2);
console.log(array_3); 
// [1, 2, 3, 4, 5]

// Erstes Element löschen (shift)
console.log(array_3.shift()); 
// gibt 1 zurück

console.log(array_3); 
// [2, 3, 4, 5]

// Letztes Element löschen (pop)
console.log(array_3.pop());
// gibt 5 zurück

console.log(array_3);
// [2, 3, 4]

// Beispiel für splice()
let arr = ["A", "B", "C", "D"];
arr.splice(1, 2);  // Start bei Index 1, löscht 2 Elemente
console.log(arr);
// ["A", "D"]



// ----------------------------
//        OBJEKTE
// ----------------------------

// Objekt initialisieren
let obj = {};

// Key-Value-Pairs hinzufügen
obj.name = "Alice";         // Punktnotation
obj["age"] = 25;            // Klammernotation
obj[1] = "Test";            // Zahl als Schlüssel → wird zu "1"

// Weiteres Objekt
let obj2 = { city: "Berlin" };

// Objekte verschmelzen (Spread-Syntax)
let merged = { ...obj, ...obj2 };
console.log(merged);
// { name: "Alice", age: 25, 1: "Test", city: "Berlin" }

// Über Keys iterieren (for...in)
for (let key in merged) {
  console.log(key, merged[key]);
}

// Über Key-Value-Paare iterieren (Object.entries)
for (let [key, value] of Object.entries(merged)) {
  console.log(key, value);
}

// Prüfen, ob ein Schlüssel existiert
console.log(merged.hasOwnProperty("city")); // true

if ("name" in merged) {
  console.log("True");
}

// Kleines Beispielobjekt
let song = { title: "Imagine" };
song.artist = "Oskar";
console.log(song);
// { title: "Imagine", artist: "Oskar" }
