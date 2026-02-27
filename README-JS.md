# SONNET JavaScript Implementation

## Scope
This project uses a single script, `app.js`, to bind form data to the preview page.

## Files and Responsibilities
- `create.html`: Collects user input and submits via GET to `preview.html`.
- `preview.html` and `view.html`: Displays the note; include `app.js` to bind query data.
- `app.js`: Parses query parameters, validates presence, and updates the DOM.

## Query Parameters and DOM Targets

| Query key | Source field (create.html) | Target (preview.html) |
| --- | --- | --- |
| `song-link` | Song link input | Used for presence check only |
| `from-name` | From input | Element with `id="from"` |
| `to-name` | To input | Element with `id="to"` |
| `your-note` | Note textarea | Element with `id="message"` |

## Logic Flow
1. On `preview.html` load, `URLSearchParams` reads the query string.
2. The script extracts `song-link`, `from-name`, `to-name`, and `your-note`.
3. If any value is missing, an alert is shown.
4. If values exist, the script updates `#from`, `#to`, and `#message`.

