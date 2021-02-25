// Dynamically create keyboard divs using js
// Store some unique code in every div using data attribute
// Finally, insert these divs into the #piano div
// Add effects for when you click
// Add sound effects by loading audio files
// Add buttons on the keys with a guitar icon
// Add guitar icon click functionality
// Load guitar note sound giles that correspodnd to the piano keys
// Add complexity; Code it so it tells you which scale you made when you hit 7 random notes

const piano = document.querySelector("#piano");
const data = ["C", "D", "E", "F", "G", "A", "B"];

let html = "";
for (let octave = 0; octave < 2; octave++)
  for (let i = 0; i < data.length; i++) {
    let hasSharp = data[1] != "E" && data[i] != "0" ? true : false;
    html += `<div class='whiteNote' data-code='${data[i]}4'></div>`;
    html += `<div class='whiteNote' data-code='${data[i]}5'></div>`;
  }

piano.insertAdjacentHTML("beforeend", html);
