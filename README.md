# Roomie — iOS-style swipe-based roommate matching UI

A modern, mobile-first iOS app UI called “Roomie” — a swipe-based roommate matching app inspired by Tinder, focused on housing and lifestyle compatibility.

![ScreenRecording2026-01-09at4 58 29PM-ezgif com-speed](https://github.com/user-attachments/assets/1018d8f1-aaca-461a-8aa8-ee5a47bba337)


## Features

- Mobile-first, iOS-style UI components and screens
- Swipe-based matching flow for roommates
- Profile setup and lifestyle/life-phase selection
- Chat screen and match success flow
- Reusable UI primitives/components (in `components/` and `components/ui/`)

## Tech stack

- Next.js (App Router)
- React + TypeScript
- CSS with PostCSS (project includes `postcss.config.mjs` and global styles)
- pnpm for package management

## Prerequisites

- Node.js 18.x or later
- pnpm (if you don't have it installed: `corepack enable && corepack prepare pnpm@latest --activate`)

## Setup & run (development)

1. Clone the repository and change into the project directory

   cd /path/to/roomie-i-os-app-ui

2. Install dependencies

   pnpm install

3. Start the development server

   pnpm dev

4. Open the app in your browser

   http://localhost:3000

The app is built for a mobile viewport — open the browser's device toolbar (responsive/mobile view) or view it on a device to see the intended layout.

## Build & production

- Build the app:

  pnpm build

- Start the production server locally:

  pnpm start

(Commands assume the `package.json` contains standard Next.js scripts: `dev`, `build`, `start`.)

## App structure / notable folders

- `app/` — Next.js App Router pages and routing
- `components/` — main screens and shared components
- `components/ui/` — UI primitives and reusable components
- `public/` — static assets (images, icons)
- `styles/` — global styles

## Available pages (routes)

- `/` — welcome screen
- `/swipe` — swipe interface for matching
- `/chat` — chat screen
- `/profile-setup` — profile creation flow
- `/life-phase` — life phase / lifestyle selection
- `/match` — match success / details

## Notes

- This project provides the UI layer and example screens; any backend or persistent data will need to be connected separately.
- If you add environment variables, create a `.env.local` at the project root and restart the dev server.

## Contributing

Contributions, bug reports and improvements are welcome. Open an issue or submit a pull request with a clear description of changes.

## License

See `LICENSE` in the repository for licensing information.

