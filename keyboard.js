// Dynamically create keyboard divs using js
// Store some unique code in every div using data attribute
// Finally, insert these divs into the #piano div
// Add effects for when you click
// Add sound effects by loading audio files
// Add buttons on the keys with a guitar icon
// Add guitar icon click functionaty
// Load guitar note sound giles that correspodnd to the piano keys
// Add complexity; Code it so it tells you which scale you made when you hit 7 random notes

const piano = document.querySelector("piano");
const data = ["C", "D", "E", "F", "G", "A", "B"];

let html = "";
for (let i = 0; i < data.length; i++)
