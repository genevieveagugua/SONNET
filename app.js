// Read values from URL
const params = new URLSearchParams(window.location.search);

const song = params.get("song-link");
const from = params.get("from-name");
const to = params.get("to-name");
const note = params.get("your-note");

// Safety check
if (!song || !from || !to || !note) {
  alert("Missing preview data");
}


// Populate text
document.getElementById("from").textContent = from;
document.getElementById("to").textContent = to;
document.getElementById("message").textContent = "${note}";