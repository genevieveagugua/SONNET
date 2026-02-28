// Read values from URL
const params = new URLSearchParams(window.location.search);

// Object to hold the data for the preview
const data = {
  song: params.get("song-link"),
  from: params.get("from-name"),
  to: params.get("to-name"),
  note: params.get("your-note"),
};

// Helper function to set text content of an element by ID
function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value ?? "";
  }
}

// Set the Spotify player URL based on the provided song link
function setSpotifyPlayer(songUrl) {
  const player = document.getElementById("spotify-player");
  if (!player || !songUrl) return;

  const embedUrl = songUrl.includes("open.spotify.com/")
    ? songUrl.replace("open.spotify.com/", "open.spotify.com/embed/")
    : songUrl;

  player.src = embedUrl;
}

// Initialize the preview page with the data from the URL
function init() {
  if (!data.song || !data.from || !data.to || !data.note) {
    alert("Looks like something’s missing. Fill in all fields to preview your note.");
  }

  setText("from", `- ${data.from}`);
  setText("to", data.to);
  setText("message", data.note ? `"${data.note}"` : "");
  setSpotifyPlayer(data.song);
}

// Build the URL for the view page with the current data
function buildViewUrl() {
  const viewParams = new URLSearchParams();
  viewParams.set("song-link", data.song ?? "");
  viewParams.set("from-name", data.from ?? "");
  viewParams.set("to-name", data.to ?? "");
  viewParams.set("your-note", data.note ?? "");
  return `${window.location.origin}/view.html?${viewParams.toString()}`;
}

// Copy the view page URL to the clipboard
function copyLink() {
  const shareButton = document.getElementById("share-button");
  const viewPageUrl = buildViewUrl();

  if (!navigator.clipboard?.writeText) {
    alert("Clipboard not available. Please copy the URL manually.");
    return;
  }

  navigator.clipboard
    .writeText(viewPageUrl)
    .then(() => {
      if (shareButton) {
        shareButton.innerHTML = '<i class="fa-solid fa-check"></i>Copied!';
        setTimeout(() => {
          shareButton.innerHTML =
            '<i class="fa-regular fa-copy"></i>Copy Link';
        }, 3000);
      }
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy link. Please try again.");
    });
}

// Redirect to the create page to edit the note
function editNote() {
  window.location.href = "create.html";
}

init();
