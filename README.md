# GreenNest - Assignment 9

React Router and Firebase based single-page plant store application.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and add your Firebase web app config.

3. Start the app:

```bash
npm run dev
```

## Project structure & deploy

- This repository's web app is at the repo root. To run locally or deploy, use the root folder.

To build for production and deploy (Firebase Hosting):

```bash
npm install
cp .env.example .env   # fill with your Firebase config
npm run build
firebase deploy --only hosting
```

If you prefer GitHub Pages, push the `dist/` folder or use `gh-pages` to serve the `dist` output.

## Features

- React Router routes with protected plant details and profile pages.
- Firebase email/password auth, Google sign-in, forgot password, logout, and profile updates.
- JSON-backed plant listings from `public/plants.json`.
- Responsive plant-shop UI inspired by the provided screenshots.
