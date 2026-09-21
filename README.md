# 💼 Connectify

> A full-stack professional networking platform inspired by LinkedIn, built with Next.js, React.js, Node.js, Express.js, and MongoDB. Connectify allows users to create profiles, share posts, connect with other users, and interact with professional content.

## 🌐 Live Demo

🔗 **Live Application:** https://connectify-kohl-gamma.vercel.app/

🔗 **GitHub Repository:** https://github.com/Ashra-Ansari/Connectify

---

## 📖 Overview

Connectify is a full-stack professional networking web application designed to provide users with a platform to build professional profiles, connect with other users, and share and interact with posts.

The application provides a complete user experience including authentication, profile management, post creation, connections, comments, and media uploads.

The project was built using **Next.js and React.js for the frontend**, with **Node.js and Express.js for backend API development**, and **MongoDB Atlas** for data storage.

---

## ✨ Features

### 👤 User Features

* User Registration & Login
* Secure User Authentication
* Create and Manage User Profiles
* Profile Information Management
* Connect with Other Users
* View Connections
* Create and Share Posts
* View Posts from Users
* Comment on Posts
* Upload Images with Posts
* View User Profiles

### 📝 Post & Content Features

* Create New Posts
* Add Images to Posts
* Display Posts in a Social Feed
* Comment on Posts
* View User Information Alongside Posts
* Media Upload and Storage using Cloudinary

### 🤝 Networking Features

* Send Connection Requests
* Manage User Connections
* View Connected Users
* Build a Professional Network

### 🔐 Authentication & Security

* User Authentication
* Protected Routes
* Password Hashing
* Token-Based Authentication
* Authentication State Management
* Secure API Communication
* Backend Validation and Error Handling

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* bcrypt
* Token-Based Authentication
* Protected API Routes

### State Management

* Redux
* Redux Toolkit

### Media & File Handling

* Cloudinary
* Multer

### Development & Deployment Tools

* Git & GitHub
* Vercel
* Render
* Postman / Hoppscotch

---

## 🔐 Security Features

* Password hashing using bcrypt
* Protected backend routes
* Token-based authentication
* Authentication middleware
* Secure API requests
* Input validation
* Backend error handling
* Separation of authentication and application logic

---

## 📱 Responsive Design

Connectify is designed to provide a usable experience across different screen sizes, including:

* 💻 Desktop Devices
* 📱 Mobile Phones
* 📟 Tablets

Responsive layouts and CSS media queries are used to adapt the application's UI to smaller screens.

---

## ⚙️ Local Setup

Follow the steps below to run Connectify locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Ashra-Ansari/Connectify.git
cd Connectify
```

### 2. Setup Backend

Navigate to the backend folder:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder and add the required environment variables:

```env
MONGO_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Then start the backend server:

```bash
npm run dev
```

The backend will start using `nodemon server.js`.

### 3. Setup Frontend

Open a **new terminal** and navigate to the frontend folder:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

The frontend will be available at the local URL provided by Next.js.

### 4. Database & Cloudinary Setup

Connectify uses **MongoDB Atlas** for database storage and **Cloudinary** for media uploads.

Before running the application, make sure you have:

* A MongoDB Atlas cluster and connection string
* A Cloudinary account with the required API credentials
* The corresponding values added to the backend `.env` file

> ⚠️ Never commit the `.env` file or expose your MongoDB and Cloudinary credentials publicly.
>
---
 ## 👩‍💻 Author

**Ashra Ansari**

Recent Information Technology graduate focused on Full-Stack Web Development and building practical real-world applications.

### Connect with me

* GitHub: https://github.com/Ashra-Ansari
* LinkedIn: https://www.linkedin.com/in/ashra-ansari-1749312a1/

---

## ⭐ If you found this project useful

Feel free to explore the repository, try the live application, or connect with me to discuss the project.

