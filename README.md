 # Quantora Website

 A modern, full-stack web application for Quantora, built with React, Firebase, and Tailwind CSS. This project features a dynamic team/services showcase, admin authentication, and a beautiful, responsive UI.

 ## Features

 - **Dynamic Services & Team**: Data-driven sections for services and team members, editable via Firestore.
 - **Admin Authentication**: Secure login/logout for admin users (Firebase Auth).
 - **Theme Toggle**: Light/dark mode with smooth transitions.
 - **Animated Intro**: Engaging intro animation using Framer Motion.
 - **Contact Form**: Integrated with Formspree for easy messaging.
 - **Responsive Design**: Mobile-first, works on all devices.

 ## Tech Stack

 - [React](https://react.dev/)
 - [Firebase (Auth & Firestore)](https://firebase.google.com/)
 - [Tailwind CSS](https://tailwindcss.com/)
 - [Framer Motion](https://www.framer.com/motion/)
 - [Vite](https://vitejs.dev/)

 ## Getting Started

 ### Prerequisites
 - Node.js (v16+ recommended)
 - npm

 ### Installation

 1. **Clone the repository:**
	 ```bash
	 git clone https://github.com/your-username/quantora-website.git
	 cd quantora-website
	 ```
 2. **Install dependencies:**
	 ```bash
	 npm install
	 ```
 3. **Configure Firebase:**
	 - Update `src/firebase.js` with your Firebase project credentials.
	 - Set up Firestore rules as needed.

 4. **(Optional) Populate Firestore with initial data:**
	 ```bash
	 node scripts/setupFirestore.js
	 ```

 5. **Start the development server:**
	 ```bash
	 npm run dev
	 ```
	 Visit [http://localhost:5173](http://localhost:5173) to view the app.

 ## Project Structure

 ```
 quantora-website/
 ├── public/
 ├── src/
 │   ├── components/
 │   ├── context/
 │   ├── data/
 │   ├── App.jsx
 │   ├── firebase.js
 │   └── ...
 ├── scripts/
 ├── package.json
 ├── tailwind.config.js
 ├── vite.config.js
 └── ...
 ```

 ## Customization
 - **Services & Team:** Edit `src/data/initial-data.js` or update Firestore directly.
 - **Site Config:** Edit `src/data/siteConfig.js` for nav links, titles, and contact info.
 - **Styling:** Tweak Tailwind classes or extend the config as needed.

 ## Deployment
 You can deploy this app to Vercel, Netlify, or Firebase Hosting. Build with:
 ```bash
 npm run build
 ```
 Then follow your host's deployment instructions.

 ## License
 MIT

 ---

 **Quantora** © 2025. Built with passion by the Quantora team.
