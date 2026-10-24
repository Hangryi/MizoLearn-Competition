# MizoLearn

An offline-first learning app for young people. The project includes a browser/PWA version and an Android APK.

## Learning paths

Basic Coding, AI Tools for Students, Freelancing Basics, Robotics Basics, Money Skills, Data Skills, Digital Marketing and Design Basics. Each path has five short lessons with a quick quiz. The tutor has a built-in answer bank for common questions and works without an internet connection.

## Android APK

The ready-to-install APK is `android-app/MizoLearn-Android.apk`. Flutter source is in `android-app/`. To rebuild it, install Flutter and run:

```sh
cd android-app
flutter pub get
flutter build apk --release
```

## Browser app

The website files are at the repository root. GitHub Pages can publish them from the `main` branch and root folder. Lessons and progress are stored on the device for offline use after the first visit.

## Online AI tutor

In the app, open Profile and enter an HTTPS server address ending in `/api/chat`. The server must accept `{ "message": "...", "style": "short-and-simple" }` and return `{ "answer": "..." }`. The app never stores an AI provider key; configure that key on the server. Without a configured server, the offline answer bank remains available.
