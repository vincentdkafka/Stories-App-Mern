# 📚 Stories App (MERN + Firebase Auth)

A full-stack web application where users can create, view, and manage short stories. Built using the MERN stack with Firebase for user authentication.

---

## 🚀 Features

- 🔐 User Signup & Login with Firebase Authentication
- ✍️ Create and publish stories
- 🧾 View a feed of all stories
- 🔒 Protected routes for authenticated users
- 🎨 Responsive design with modern UI (Tailwind CSS)
- 🔥 Google Cloud/Firebase Integration

---

## 🛠️ Tech Stack

**Frontend:**
- React (TypeScript)
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Firebase Auth

---

## 🧪 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/vincentdkafka/Stories-App-Mern.git
cd Stories-App-Mern
```

### 2. Configure Firebase

- Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
- Enable **Email/Password Authentication**
- Get your Firebase config and add it to your frontend `firebase.js` file.

### 3. Create `.env` files

In both `frontend/` and `backend/`, create a `.env` file:

**Frontend `.env`:**

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

**Backend `.env`:**

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

### 4. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

### 5. Run Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🌐 Live Demo

> [Optional: Add deployed link here using Netlify, Vercel, or Render]

---

## 📁 Folder Structure

```
Stories-App-Mern/
├── frontend/         # React client
│   └── src/
│       └── pages/
│       └── components/
├── backend/          # Node + Express server
│   └── src/
├── .env              # Environment variables (not pushed)
└── README.md         # Project documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a PR.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Harsh Kurware**  
📫 [LinkedIn](https://www.linkedin.com/in/harshkurware)  
🧑‍💻 Full-stack Developer | Designer