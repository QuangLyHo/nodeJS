# FullStackNodeApp (Ghost Sightings)

This is a small full-stack Node.js project that serves a simple “sightings” website and exposes a lightweight JSON API. The backend is built using Node’s native `http` module (no Express), ES Modules, and file-based data storage. The project focuses on backend fundamentals such as routing, file I/O, error handling, and real-time updates.

---

## What the project does

- Serves static frontend pages from the `/public` directory
- Exposes a JSON API for retrieving and creating ghost sightings
- Persists data to a local JSON file
- Streams live updates using Server-Sent Events (SSE)
- Sanitizes incoming user input
- Demonstrates basic event-driven design using Node’s EventEmitter

---

## Tech stack

- Node.js (native `http`, `fs/promises`, `path`)
- ES Modules (`"type": "module"`)
- `sanitize-html` for sanitizing user input
- Server-Sent Events (SSE) for real-time updates
- No frameworks (no Express)

---

## Project structure

fullStackNodeApp/
├── server.js
├── package.json
├── handlers/
│ └── routeHandlers.js
├── utils/
│ ├── serveStatic.js
│ ├── sendResponse.js
│ ├── getContentType.js
│ ├── parseJSONBody.js
│ ├── getData.js
│ ├── addNewSighting.js
│ ├── sanitize.js
│ └── createAlert.js
├── events/
│ └── sightingEvents.js
├── data/
│ ├── data.json
│ └── stories.js
├── public/
│ ├── index.html
│ ├── index.js
│ ├── sightings.html
│ ├── upload-sighting.html
│ ├── upload-sighting.js
│ ├── news.html
│ ├── news.js
│ ├── style.css
│ └── images/

---

