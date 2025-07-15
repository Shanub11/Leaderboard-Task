# Leaderboard Task

A full-stack Leaderboard web application built with **ReactJS** (frontend), **Node.js/Express** (backend), and **MongoDB** for data storage.

---

## Features

- **User List:**  
  - Displays all users from MongoDB.
  - Each user has a "Claim" button to claim random points (1–10).
  - Points are shown in real-time for each user.
- **Add User:**  
  - Add new users via a form; users are saved in MongoDB.
- **Leaderboard:**  
  - Shows users ranked by total points (highest first).
  - Updates automatically after each claim.
- **Point History:**  
  - Every claim action is saved in a separate `history` collection.
- **Responsive UI:**  
  - Modern, clean design with a fixed navbar and styled components.

---

## Tech Stack

- **Frontend:** ReactJS, Vite, react-router-dom, CSS
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB

---

## Folder Structure

```
src/
  App.jsx
  User.js
  History.js
  routes.js
  server.js
  seedUsers.js
  index.css
  components/
    UserList.jsx
    Leaderboard.jsx
```

---

## How to Run Locally

### 1. Clone the repository

```sh
git clone https://github.com/Shanub11/Leaderboard-Task.git
cd Leaderboard-Task
```

### 2. Install dependencies

```sh
npm install
```

### 3. Seed the database with users

```sh
node src/seedUsers.js
```

### 4. Start the backend server

```sh
node src/server.js
```
The backend will run at [http://localhost:3001](http://localhost:3001).

### 5. Start the frontend (Vite dev server)

```sh
npm run dev
```
The frontend will run at [http://localhost:5173](http://localhost:5173) by default.

---

## API Endpoints

- `GET /api/users` — Get all users
- `POST /api/users` — Add a new user
- `POST /api/claim/:userId` — Claim random points for a user (1–10)
- `GET /api/leaderboard` — Get sorted leaderboard
- `GET /api/history` — Get all point claim history

---

## Deployment

- **Frontend:** Deploy the `dist` folder (after `npm run build`) to Netlify, Vercel, etc.
- **Backend:** Deploy the Express server to Render, Railway, or similar.
- **Update frontend API URLs** to point to your deployed backend.

---

## Screenshots
<img width="1902" height="990" alt="Screenshot 2025-07-16 000007" src="https://github.com/user-attachments/assets/cb94195b-6d8e-437c-8133-6a088e25187a" />
<img width="1890" height="993" alt="Screenshot 2025-07-16 000031" src="https://github.com/user-attachments/assets/6df97a69-bc71-4c3f-bc12-1b429d20aadc" />
<img width="1890" height="989" alt="Screenshot 2025-07-16 000055" src="https://github.com/user-attachments/assets/b719218e-0edc-4767-8db4-b644501ae057" />
<img width="1898" height="992" alt="Screenshot 2025-07-15 235951" src="https://github.com/user-attachments/assets/98ba5b88-383a-4820-a9c0-2887c023ee53" />

_Add screenshots here if desired._

---

## Author

Shantanu Bhardwaj  
July 2025

---
