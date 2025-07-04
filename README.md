# 🧠 AIBoard – React.js UI Dashboard

Hi! 👋  
This is **AIBoard**, a modern and responsive 3-page React.js application built as part of the **Agusta Hitech UI Developer Assessment**.  
It focuses on clean UI/UX, component structure, animations, and responsiveness using the best tools in the React ecosystem.

---

## 🚀 What’s Inside?

### 🔹 Landing Page
- Eye-catching hero section with gradients & animations
- Feature highlight cards with icons
- Fully responsive layout using CSS and Tailwind
- Custom button styles with hover effects

### 🔹 Dashboard Page
- 4 animated metric cards (Users, Sessions, Revenue, Engagement)
- Line chart using **Recharts**
- Filters for time range, user type, and date picker
- Smooth card hover effects and entrance animations
- Designed to look clean in both light & dark mode

### 🔹 Chat Page
- ChatGPT-style interface with message bubbles
- User/assistant message layout with avatars
- Typing animation for a realistic feel
- Sidebar navigation, filter dropdowns, and responsive layout

---

## 🛠️ Tech Stack

This app is built using:

- **React.js** – Main UI framework
- **Ant Design** – UI components
- **Recharts** – For the dashboard chart
- **Tailwind CSS** – Utility-first styling
- **CSS3** – For custom layouts and animations
- **React Router DOM** – For page navigation

---

## 📁 Project Structure

src/
│
├── components/ # Reusable UI components
│ ├── Chat/
│ ├── Dashboard/
│ └── Layout/
│
├── pages/ # Route-based page components
│ ├── LandingPage.jsx
│ ├── DashboardPage.jsx
│ └── ChatPage.jsx
│
├── styles/ # Custom CSS files
│ ├── Dashboard.css
│ ├── Chat.css
│ └── Navbar.css
│
├── App.jsx # Main app structure & routing
└── index.js # Entry point