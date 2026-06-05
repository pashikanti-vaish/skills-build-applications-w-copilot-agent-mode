# OctoFit Tracker - Multi-Tier Application

A modern fitness tracking application built with React 19, Vite, Node.js, Express, TypeScript, and MongoDB.

## Architecture

```
octofit-tracker/
├── frontend/          # React 19 + Vite
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── backend/           # Node.js + Express + TypeScript
    ├── src/
    ├── package.json
    └── tsconfig.json
```

## Services & Ports

| Service | Port | Description |
|---------|------|-------------|
| Frontend (Vite) | 5173 | React development server |
| Backend API | 8000 | Express REST API |
| MongoDB | 27017 | NoSQL Database |

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB >= 4.4

## Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend will be available at `http://localhost:8000`

## Features

- **Frontend**: React 19 with modern UI components
- **Backend**: RESTful API with TypeScript type safety
- **Database**: MongoDB with Mongoose ODM
- **Development**: Hot module reloading and watch mode
- **Styling**: Modern CSS with responsive design

## Environment Variables

Create `.env` file in the backend directory:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## Available API Endpoints

- `GET /health` - Health check
- `GET /api` - API information
- `GET /api/users` - List all users (to be implemented)
- `POST /api/users` - Create new user (to be implemented)

## License

MIT
