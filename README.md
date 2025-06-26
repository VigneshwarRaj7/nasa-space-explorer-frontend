# 🚀 NASA Space Explorer – Frontend

A visually engaging, animated React app that brings together NASA's APOD, Earth imagery (EPIC), Mars Rover Photos, and Asteroid data in a Rick & Morty-style interactive experience. Built with **React + Vite**, styled using **Tailwind CSS**, animated with **Framer Motion**, and deployed to **Firebase Hosting**.

---

## 🔧 Tech Stack

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🎥 Framer Motion
- 📦 React Router
- 📊 Chart.js / Recharts (for asteroid visualizations)
- 🔥 Firebase Hosting

---

## 📁 Folder Structure
frontendReact/
│
├── .firebase/                 # Firebase local config
├── dist/                      # Production build output (after `npm run build`)
├── node_modules/
├── public/                    # Public assets
│
├── src/
│   ├── assets/                # All static images, GIFs
│   ├── components/
│   │   ├── ApodComponents/    # Components for APOD feature
│   │   ├── AsteroidComponents/ 
│   │   │   ├── AsteroidCard.jsx
│   │   │   ├── AsteroidGallery.jsx
│   │   │   ├── AsteroidGraph.jsx
│   │   │   ├── AsteroidLegend.jsx
│   │   │   └── DateRangePicker.jsx
│   │   ├── Earth/
│   │   ├── Home/
│   │   │   └── HoverDialogue.jsx
│   │   └── MarsComponents/
│
│   ├── pages/                 # Top-level route pages
│   │   ├── Apod.jsx
│   │   ├── Asteroid.jsx
│   │   ├── Earth.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── LoadingPage2.jsx
│   │   └── Mars.jsx
│
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── pgLite-debug.log


---

## 🚀 Features

- 🌌 **Home Page**: Animated spaceship, Rick & Morty-style hover dialogues, clickable planets & portals.
- 📸 **APOD**: Astronomy Picture of the Day cube with animations.
- 🌍 **Earth (EPIC)**: View real-time satellite Earth images with metadata.
- 🪐 **Mars Rover**: Browse Mars Rover images by sol/camera.
- ☄️ **Asteroid Tracker**: Date-range-based asteroid data, hazardous indicators, and a visualization graph.
- 📱 **Responsive**: Fully mobile-ready layout.
- 🧪 **Tests**: Unit tests using Jest.

---

## 📦 Install

```bash
cd frontendReact
npm install

🧪 Run Dev Server
npm run dev