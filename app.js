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
document.getElementById("message").textContent = `"${note}"`;

// Spotify embed
const embedUrl = song.replace("open.spotify.com/", "open.spotify.com/embed/");
document.getElementById("spotify-player").src = embedUrl;

// Copy Link
function copyLink() {
  const viewPageUrl = `${window.location.origin}/view.html?song-link=${encodeURIComponent(song)}&from-name=${encodeURIComponent(from)}&to-name=${encodeURIComponent(to)}&your-note=${encodeURIComponent(note)}`;
  const shareBtnText = document.getElementById("share-button");

  navigator.clipboard
    .writeText(viewPageUrl)
    .then(() => {
      shareBtnText.innerHTML = '<i class="fa-solid fa-check"></i>Copied!';
      setTimeout(() => {
        shareBtnText.innerHTML = '<i class="fa-regular fa-copy"></i>Copy Link';
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy link. Please try again.");
    });
}