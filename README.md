# 🚀 Resource Manager – MERN Stack Application

A clean and modern web application for managing learning resources such as Articles, Videos, and Tutorials.  
Users can **create, view, update, and delete** resources, with search and filtering support.

---

## 📌 Features

### ✅ Core Functionality
- Create new resources  
- Edit existing resources  
- Delete resources  
- View all resources  
- Data stored in MongoDB

### 🎨 UI/UX Features
- Modern Tailwind CSS UI  
- Responsive design  
- Reusable form component  
- Dynamic color badges for resource type  
- Toast notifications for success/error  
- Search by title  
- Filter by resource type  
- Smooth transitions & intuitive layout  

### 🛡 Backend Features
- Node.js + Express REST API  
- MongoDB + Mongoose  
- Clean MVC folder structure  
- Middleware validation layer  

---

## 🛠 Tech Stack Used

### **Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- React Hook Form
- React Hot Toast

### **Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- CORS
- Dotenv

---

## ⚙️ Setup Instructions

## 1. Clone or Download the repo
git clone "url" or Download then extract file and open in vscode

## 2. Backend Setup
- cd server
- npm install

## Create .env file
- PORT=5000
- MONGO_URI=your_mongodb_connection_string

## Start Backend Server
- nodemon index.js

## 3. Frontend Setup
- cd client
- npm install

## Start The Frontend
- npm run dev

## 4. API Endpoints
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/api/resources`     | Get all resources   |
| GET    | `/api/resources/:id` | Get single resource |
| POST   | `/api/resources`     | Create a resource   |
| PUT    | `/api/resources/:id` | Update a resource   |
| DELETE | `/api/resources/:id` | Delete a resource   |


