# MindPilot

A responsive, local-first personal growth workspace for daily planning, focus sessions, English speaking practice, career actions, savings planning, and progress reviews.

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The static production site is written to `dist/`.

## Use on laptop and mobile

MindPilot is responsive and can be installed as a web app after it is hosted on HTTPS:

- On desktop Chromium browsers, use the browser's **Install app** option.
- On Android, use Chrome's **Install app** or **Add to Home screen** option.
- On iPhone or iPad, open the site in Safari, tap **Share**, then **Add to Home Screen**.

The app shell and visited static assets are cached for offline launch after the first successful visit. English speech recognition requires a supported browser and microphone access.

## Deploy

This repository includes configuration for both static hosting providers:

- **Netlify:** Import the repository. `netlify.toml` sets `npm run build`, publishes `dist`, and routes app paths to the SPA entry point.
- **Vercel:** Import the repository. `vercel.json` sets the Vite framework, build command, `dist` output, and SPA rewrite.

To publish, push the project to a Git provider and connect that repository to Netlify or Vercel. No server-side runtime is needed for the current app.

## Local data and cross-device use

MindPilot stores profile, missions, tasks, practice notes, progress, and focus history in browser `localStorage`. Each browser/device has its own local data. Hosting the app makes the same URL available on laptop and mobile, but `localStorage` does not sync between them. Use **Backup** on one device and **Restore** on the other to transfer a snapshot. The development URL and deployed URL also have separate storage.

Automatic cross-device sync would require a backend account and database; it is not enabled in this local-first version.
