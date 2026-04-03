# 📚 Online Group Study Assignment Platform

This project is a full-stack web application where users can create, complete, and evaluate assignments collaboratively. It is designed to simulate an online group study environment where every registered user can interact with assignments and grade others.

---

## 🚀 Live Features

### 🔐 Authentication

* User registration with **Name, Photo URL, Email, Password** (Firebase)
* Social login (Google/GitHub)
* Secure authentication using Firebase

---

## 📝 Assignment Management (Private Routes)

### ➕ Create Assignment

* Title, Description, Marks
* Thumbnail Image URL
* Difficulty Level (Easy / Medium / Hard)
* Due Date (using `react-datepicker`)
* Success notification (Toast/Modal)

### ❌ Delete Assignment

* Only creator can delete their assignment
* Email verification before delete
* Success & error messages implemented

### ✏️ Update Assignment

* Update assignment info
* Auto-filled form (optional)
* Redirect after update (optional)

---

## 📖 Assignment Participation

### 🌐 Public Assignment Page

* View all assignments without login
* Filter by difficulty level

### 👀 Assignment Details (Private)

* Full assignment info
* “Take Assignment” button

### 📤 Submit Assignment

* PDF Link submission
* Notes/description
* Default status: **Pending**
* User email stored for tracking

---

## 🧮 Assignment Evaluation

### 📥 Submitted Assignments (Private)

* View all pending submissions
* Assignment title, marks, examinee name

### 📝 Give Marks

* View submitted PDF (Google Drive link)
* Add marks + feedback
* Status changes to **Completed**

---

## 📄 Pages Overview

### 🏠 Home Page (Public)

* Navbar (dynamic based on login)
* Banner section
* Feature section
* FAQ section
* Footer

### 🔐 Private Pages

* Create Assignment
* My Assignments
* Submitted Assignments
* Assignment Details
* Update Assignment

### 🌍 Public Pages

* Home
* All Assignments
* Login
* Register

---

## 🧑‍💻 Tech Stack

### 🎨 Frontend

* React.js
* Tailwind CSS
* React Router
* React Datepicker
* Firebase Authentication

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB

---

## 🔑 Key Functionalities

* 🔒 Private & Public Routing
* 🔍 Assignment Filtering
* 👥 User-based Authorization
* 📊 Assignment Status Tracking (Pending → Completed)
* 📨 Real-time Feedback System
* 🎯 Toast Notifications

---

## 📦 Installation & Setup

### 🔹 Clone Repository

```bash
git clone https://github.com/Mahmud256/Assignment-11-Client.git
cd Assignment-11-Client
```

## 🧠 Learning Outcomes

* Full-stack development (MERN)
* Firebase authentication & authorization
* CRUD operations with MongoDB
* Role-based access control
* Real-world project architecture

---

## 📌 Future Improvements

* Real-time chat between users
* Notification system
* Assignment deadline reminders
* Admin dashboard

---


This Website Live Link: https://assignment-11-3a371.web.app/

