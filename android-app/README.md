# MizoLearn Android

Standalone Flutter Android project for the MizoLearn learning app. It packages the text-first web interface inside an Android WebView, with the lesson content bundled in the APK for offline use.

## Build the APK

From this folder, run:

```sh
flutter pub get
flutter build apk --release
```

The APK is written to `build/app/outputs/flutter-apk/app-release.apk`.

## Learning paths

The app includes coding, AI, freelancing, robotics, money skills, data, digital marketing and design. Lessons, quizzes and the offline answer bank are packaged in the app. Progress is saved in on-device IndexedDB/local storage.

## Online AI

The tutor falls back to its offline answer bank. To use online AI, enter a secure server URL ending in `/api/chat` in Profile. The server should accept `{ "message": "...", "style": "short-and-simple" }` and return `{ "answer": "..." }`. Keep the AI provider key on the server; do not put it in this app. No AI backend or provider key is included.
