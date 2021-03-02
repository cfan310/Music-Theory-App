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
// loop over first two octaves; CDEFGAB -> CDEFGAB
for (let octave = 0; octave < 2; octave++)
  for (let i = 0; i < data.length; i++) {
    let hasSharp = data[i] != "E" && data[i] != "B" ? true : false;
    html += `<div class='whiteNote' data-code='${data[i]}${octave + 4}'></div>`; // C4 D4 E4....
   
    }
  }

piano.insertAdjacentHTML("beforeend", html);

/*
if (hasSharp) {
      html += `<div class='whiteNote' data-code='${data[i]}#${
        octave + 4
      }'></div>`;
      html += "</div>";
    }
*/
