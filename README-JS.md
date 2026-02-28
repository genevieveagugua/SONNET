# SONNET JavaScript Implementation

## Scope
This project uses a single script, `app.js`, to bind form data to the preview and view pages.

## Files and Responsibilities
- `create.html`: Collects user input and submits via GET to `preview.html` (query string).
- `preview.html`: Displays the note and includes `app.js` for binding.
- `view.html`: Recipient view page that also includes `app.js`.
- `app.js`: Parses query parameters, validates presence, and updates the DOM.

## Query Parameters and DOM Targets

| Query key | Source field (create.html) | Target (preview.html) |
| --- | --- | --- |
| `song-link` | Song link input | Used for presence check only |
| `from-name` | From input | Element with `id="from"` |
| `to-name` | To input | Element with `id="to"` |
| `your-note` | Note textarea | Element with `id="message"` |

## Logic Flow
1. On page load, `URLSearchParams` reads the query string.
2. The script stores values in a small `data` object.
3. If any value is missing, an alert is shown.
4. The script updates `#from`, `#to`, and `#message`.
5. The Spotify iframe is updated with an embed URL.

## What Makes It Modular (Beginner Friendly)
Even though it is one file, it is modular because each task is in its own function:

- `setText(id, value)`: Updates text content safely.
- `setSpotifyPlayer(songUrl)`: Builds and sets the Spotify embed URL.
- `buildViewUrl()`: Creates the shareable `view.html` link.
- `copyLink()`: Copies the share link and updates button text.
- `editNote()`: Sends the user back to `create.html`.
- `init()`: One place that wires everything together.

This keeps the code easy to read, test, and change without touching unrelated parts.

