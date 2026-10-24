# MizoLearn — Education Chat App

MizoLearn is a mobile-first, offline-friendly learning prototype for young people. It includes 15 short lessons and quizzes across Basic Coding, AI Tools for Students, and Freelancing Basics.

## Open the app

This is a static web app. To use its offline features, serve this folder over localhost or HTTPS (opening `index.html` directly does not enable the service worker).

- In VS Code, open this folder and use the **Live Server** extension, then click **Go Live**.
- Or, if Python is installed, open a terminal in this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

After the first visit, the app shell and lesson content are cached for offline use. Progress and chat history are stored in IndexedDB on the device.

## Publish as a separate GitHub project

This folder is the complete project. Create a new GitHub repository named `mizolearn-education-app`, then use GitHub Desktop:

1. Choose **File → Add Local Repository** and select this folder.
2. If prompted, choose **create a repository here**.
3. Commit the project files with a message such as `Add MizoLearn prototype`.
4. Choose **Publish repository** and select the visibility required for your competition.

For a live demo, enable **GitHub Pages** in the repository settings and publish from the `main` branch and `/ (root)` folder. The app uses relative paths, so it can run from a GitHub Pages project URL.

## What is included

- `index.html`, `styles.css`, `app.js`: app screens, styles and sample lessons.
- `sw.js`: service worker for caching the static app shell.
- `manifest.json` and `icons/`: installable PWA metadata and icons.

The tutor's offline answer bank works without a server. Optional online services can be connected at `POST /api/chat` and `POST /api/sync`; no backend is included in this prototype.
