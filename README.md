# Todo list app
A practice project: a small React todo list built with Vite, used to practice React state and tests. It is one of my small practice apps, not a product.

## What the app does

- Adds a todo from a text input. Blank or whitespace-only input is rejected. The text is stored as typed, including surrounding spaces.
- Toggles a todo between done and not done. A done todo gets the `completed` class, and its text is struck through.
- Deletes a todo.
- Keeps todos in React state only. Reloading the page clears them.

Each todo gets its ID from a counter stored in a `useRef`, so two todos added in the same millisecond keep separate IDs.

## Stack

- React 19 (`react`, `react-dom`), built and served with Vite 8 and `@vitejs/plugin-react`.
- TypeScript 6 type-checks `src/App.jsx` and `src/index.jsx` through JSDoc annotations (`checkJs`).
- Jest 30 with ts-jest and Testing Library runs the tests in `src/App.test.jsx`.
- ESLint 10 lints the project, with the React hooks rules enabled for `src/`.
- Bun is the package manager. `package.json` pins `bun@1.4.2`.

## Requirements

- Node 22.23.2 (`engines.node` is `>=22.23.2 <23`).
- Bun 1.4.2 or newer, below 2.

## Run it locally

```bash
bun install --frozen-lockfile
bun run start
```

Vite serves the app at `http://localhost:5173` by default.

## Scripts

| Command | What it does |
| --- | --- |
| `bun run start` | Starts the Vite development server. |
| `bun run build` | Runs `tsc`, then `vite build`, which writes the output to `build/`. |
| `bun run start:prod` | Serves `build/` with `serve` on `0.0.0.0`, using `PORT` (default 3000). |
| `bun run lint` | Runs ESLint on the repository. |
| `bun run test` | Runs the Jest suite. |
| `bun run test:production` | Runs `tests/production-smoke.mjs` against `build/`. Run `bun run build` first. |

## Environment variables

The app code reads no environment variables. The `start:prod` script reads `PORT` to choose its port and falls back to 3000.

## Deployment

`nixpacks.toml` configures a Nixpacks build with Node 22 and Bun. It runs `bun install --frozen-lockfile`, then `bun run build`, and starts the app with `bun run start:prod`.

## Project layout

```
src/
  App.jsx        Todo list component and its state
  App.css        Component styles, with one media query at 768px
  App.test.jsx   Jest tests for the component
  index.jsx      Entry point that mounts App into #root
  index.css      Global styles
public/          Favicon, web app manifest and robots.txt
tests/           Jest setup, CSS mock and the production smoke test
```

## Tests

`src/App.test.jsx` has 12 tests. They cover the initial empty list, adding text, rejecting blank input, keeping the exact text, submitting the form without a page reload, completing and undoing a todo, deleting a todo, two todos added in the same millisecond, and rendering HTML-like text as plain text.

## Live sites

- https://todoapp.thomasscheiber.com/ serves this app.
- https://t-scheiber.github.io/todo-app/ loads the app, but its page title is "React App", not the title this source sets.
