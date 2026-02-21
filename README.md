# 🍕 Food Application

> A modern, scalable food delivery and marketplace platform built with Node.js, Express, and MongoDB. Connect food partners with customers and manage food items with video content seamlessly.

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.2.1-000?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-9.1.5-13aa52?style=flat-square&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [API Documentation](#api-documentation) • [Usage](#usage) • [Project Structure](#project-structure)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Database Models](#database-models)
- [Authentication](#authentication)
- [File Upload](#file-upload)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Food Application is a comprehensive platform designed to connect food partners (restaurants, vendors, chefs) with customers. The platform enables food partners to upload food items with engaging video content, while customers can discover and order from these listings. Built with modern technologies, the application prioritizes security, scalability, and performance.

**Current Version:** 1.0.0  
**Author:** Anuj Rajpoot  
**Latest Update:** February 2026

---

## ✨ Features

### 🔐 Authentication & Authorization
- Dual authentication system for **Users** and **Food Partners**
- Secure JWT-based token authentication
- Password hashing with bcryptjs (10 salt rounds)
- Cookie-based session management
- Logout functionality with token clearance

### 🍔 Food Management
- Food partners can create and list food items
- Video content support for food listings (using ImageKit)
- Rich food item metadata (name, description, chef/partner info)
- Unique food identifiers using UUID

### 📹 Media Management
- Multi-part form data support for video uploads
- In-memory file handling with Multer
- ImageKit integration for media optimization and delivery
- Secure file upload with authentication middleware

### 🛡️ Security Features
- JWT token-based authentication
- Password encryption and validation
- Middleware-based authorization checks
- Secure cookie handling
- Input validation and error handling

### 📊 Database
- MongoDB integration for data persistence
- Mongoose ORM for schema validation
- Referential integrity with ObjectId references
- Automatic timestamps for records

---

## 🔧 Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 5.2.1
- **Database:** MongoDB with Mongoose 9.1.5
- **Authentication:** JSON Web Tokens (JWT) 9.0.3
- **Password Security:** bcryptjs 3.0.3
- **File Upload:** Multer 2.0.2
- **Media Management:** ImageKit 6.0.0
- **Utilities:** 
  - UUID 13.0.0 (unique identifiers)
  - Cookie Parser 1.4.7 (cookie handling)
  - dotenv 17.2.3 (environment variables)

### Development Tools
- **Dev Server:** Nodemon 3.1.14
- **Testing:** Python with requests library (included test.py)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Python** (3.8+ for testing - optional)

Verify installations:
```bash
node --version
npm --version
mongodb --version
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/anujrajpoot-dev/Food-Application.git
cd Food-Application
```

### 2. Navigate to Backend Directory
```bash
cd backend
```

### 3. Install Dependencies
```bash
npm install
```
or
```bash
npm i
```

This will install all required packages listed in `package.json`:
- express, mongoose, jsonwebtoken, bcryptjs
- multer, cookie-parser, imagekit, uuid, dotenv
- nodemon (development dependency)

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/food-application
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/food-application

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# ImageKit Configuration (for media uploads)
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### Important Notes
- ⚠️ **Never commit `.env` to version control**
- 🔑 Use strong JWT_SECRET in production
- 🖼️ Get ImageKit API keys from [imagekit.io](https://imagekit.io)
- 🗄️ Ensure MongoDB is running before starting the server

---

## ▶️ Running the Application

### Development Mode (with Nodemon)
```bash
cd backend
npx nodemon server.js
```
The server will automatically restart on file changes.

### Production Mode
```bash
cd backend
node server.js
```

### Expected Output
```
DataBase is connected Successfully with Server
Server is running on port 3000
```

### Verify Server is Running
```bash
curl http://localhost:3000
# Response: "It is running now"
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

#### **User Registration**
```http
POST /auth/user/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "message": "User registered Successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "fullName": "John Doe"
  }
}
```

---

#### **User Login**
```http
POST /auth/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "User logged in Successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "fullName": "John Doe"
  }
}
```
*Note: JWT token is set in HTTP-only cookie*

---

#### **User Logout**
```http
GET /auth/user/logout
```

**Response (200 OK):**
```json
{
  "message": "User Logged out Successfully"
}
```

---

### Food Partner Endpoints

#### **Food Partner Registration**
```http
POST /auth/food-partner/register
Content-Type: application/json

{
  "name": "Pizza Palace",
  "email": "pizza@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "message": "Food Partner registered Successfully",
  "foodPartner": {
    "_id": "507f1f77bcf86cd799439012",
    "email": "pizza@example.com",
    "name": "Pizza Palace"
  }
}
```

---

#### **Food Partner Login**
```http
POST /auth/food-partner/login
Content-Type: application/json

{
  "email": "pizza@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "Food Partner logged in Successfully",
  "foodPartner": {
    "_id": "507f1f77bcf86cd799439012",
    "email": "pizza@example.com",
    "name": "Pizza Palace"
  }
}
```

---

#### **Food Partner Logout**
```http
GET /auth/food-partner/logout
```

**Response (200 OK):**
```json
{
  "message": "Food Partner Logged out Successfully"
}
```

---

### Food Management Endpoints

#### **Create Food Item** ⭐
```http
POST /food
Content-Type: multipart/form-data
Authorization: Bearer <JWT_TOKEN>

Form Data:
- video: <binary_video_file>
- name: "Margherita Pizza"
- description: "Classic Italian pizza with fresh basil"
```

**Requirements:**
- ✅ Authentication required (Food Partner must be logged in)
- ✅ Video file in multipart form data
- ✅ Valid JWT token in cookie

**Response (200 OK):**
```json
{
  "message": "Food item created"
}
```

---

## 💻 Testing the API

### Using Python (included test.py)

The project includes a Python test script (`test.py`) for quick API testing:

```bash
python test.py
```

This script demonstrates:
- HTTP POST request to food partner registration
- JSON payload construction
- Response status code and content handling

### Manual Testing with cURL

**Register Food Partner:**
```bash
curl -X POST http://localhost:3000/api/auth/food-partner/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pizza Palace",
    "email": "pizza@example.com",
    "password": "securepass123"
  }'
```

**Create Food Item with Video:**
```bash
curl -X POST http://localhost:3000/api/food \
  -b "token={JWT_TOKEN}" \
  -F "video=@/path/to/video.mp4" \
  -F "name=Pepperoni Pizza" \
  -F "description=Delicious pepperoni pizza"
```

### Using Postman

1. Import API endpoints into Postman collection
2. Set `{{base_url}}` to `http://localhost:3000/api`
3. Use "Authorization" tab to store JWT tokens
4. Test endpoints in sequence (register → login → create food)

---

## 📁 Project Structure

```
Food-Application/
│
├── README.md                    # Project documentation
├── LICENSE                      # MIT License
├── test.py                      # Python API test script
│
└── backend/
    ├── package.json            # Dependencies and scripts
    ├── server.js               # Entry point - server initialization
    │
    └── src/
        ├── app.js              # Express app configuration
        │
        ├── controller/
        │   ├── auth.controller.js        # Authentication logic
        │   └── food.controller.js        # Food management logic
        │
        ├── db/
        │   └── db.js            # MongoDB connection
        │
        ├── middleware/
        │   └── auth.middleware.js        # JWT verification & authorization
        │
        ├── models/
        │   ├── user.models.js            # User schema
        │   ├── foodpartner.model.js      # Food Partner schema
        │   └── fooditem.model.js         # Food Item schema
        │
        ├── routes/
        │   ├── auth.routes.js    # Authentication endpoints
        │   └── food.routes.js    # Food management endpoints
        │
        └── services/
            └── storage.services.js       # ImageKit file upload service
```

---

## 🗄️ Database Models

### User Schema
```javascript
{
  fullName: String (required),
  email: String (required, unique),
  password: String (hashed),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Use Case:** Regular customers browsing and ordering food items

---

### Food Partner Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required)
}
```

**Use Case:** Restaurants, food vendors, chefs managing their listings

---

### Food Item Schema
```javascript
{
  name: String (required),
  video: String (required, ImageKit URL),
  description: String,
  foodpartner: ObjectId (reference to Food Partner),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Use Case:** Food listings with video demonstrations

### Relationships
```
FoodPartner (1) ──────── (Many) FoodItem
```
A food partner can create multiple food items, each linked by `foodpartner` reference.

---

## 🔐 Authentication

### JWT Implementation

The application uses JSON Web Tokens (JWT) for stateless authentication:

1. **Token Generation** (on register/login):
   ```javascript
   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
   res.cookie("token", token)
   ```

2. **Token Verification** (on protected routes):
   ```javascript
   const decoded = jwt.verify(token, process.env.JWT_SECRET)
   const foodPartner = await foodPartnerModel.findById(decoded.id)
   ```

3. **Token Storage**:
   - Stored in HTTP-only cookies (secure)
   - Automatically sent with requests
   - Cleared on logout

### Security Features

| Feature | Implementation |
|---------|-----------------|
| **Password Hashing** | bcryptjs with 10 salt rounds |
| **Token Expiry** | Configure in production |
| **HTTPS** | Recommended for production |
| **CORS** | Can be added to middleware |
| **Rate Limiting** | Recommended for production |

---

## 📹 File Upload

### Multer Configuration

The application uses Multer for handling `multipart/form-data`:

```javascript
const upload = multer({
  storage: multer.memoryStorage(),
  // Future: Add size limits and file type validation
})

router.post('/', 
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
)
```

### ImageKit Integration

Files are uploaded to ImageKit for:
- ✅ Reliable media hosting
- ✅ Automatic optimization
- ✅ CDN delivery
- ✅ Multiple format support

**Configuration in `storage.services.js`:**
```javascript
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})
```

### File Upload Best Practices

```
✅ Always validate file type and size
✅ Store file references in database
✅ Use unique filenames (UUID)
✅ Implement virus scanning in production
✅ Set proper access controls
```

---

## 🛠️ Development Guide

### Adding New Features

1. **Create API Endpoint:**
   - Add controller logic in `src/controller/`
   - Define routes in `src/routes/`
   - Add middleware if needed

2. **Database Operations:**
   - Update models in `src/models/`
   - Use Mongoose methods for queries

3. **Authentication:**
   - Use `authMiddleware` for protected routes
   - Check user/partner from decoded token

4. **Testing:**
   - Update `test.py` or create Postman collection
   - Test with both success and error cases

---

## 📊 Environment Requirements

| Component | Version | Purpose |
|-----------|---------|---------|
| Node.js | ≥18.0 | JavaScript runtime |
| npm | ≥9.0 | Package manager |
| MongoDB | ≥4.4 | Database |
| Express | 5.2.1 | Web framework |
| Mongoose | 9.1.5 | ODM for MongoDB |
| JWT | 9.0.3 | Authentication tokens |

---

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
- ✅ Ensure MongoDB daemon is running
- ✅ Check MONGODB_URI in .env
- ✅ Verify MongoDB credentials for Atlas

**JWT Token Invalid**
```
Error: Invalid Token
```
- ✅ Ensure JWT_SECRET matches in .env
- ✅ Token may have expired
- ✅ Clear cookies and re-login

**File Upload Failed**
```
Error: ENOENT: no such file or directory
```
- ✅ Check file path is correct
- ✅ Verify ImageKit credentials
- ✅ Ensure file size is within limits

---

## 📈 Performance Optimization

```
✅ Database indexing on frequently queried fields (email)
✅ Pagination for large datasets
✅ Caching strategies for popular items
✅ CDN for media delivery (ImageKit)
✅ Connection pooling for MongoDB
```

---

## 🔄 Future Enhancements

- [ ] Order management system
- [ ] Rating and review system
- [ ] Search and filter functionality
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Mobile application
- [ ] API rate limiting and throttling
- [ ] Comprehensive error handling
- [ ] Unit and integration tests
- [ ] API documentation (Swagger/OpenAPI)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use consistent naming conventions
- Add comments for complex logic
- Test thoroughly before submitting PR
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

```
MIT License

Copyright (c) 2026 Anuj Rajpoot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📮 Contact & Support

- **Author:** Anuj Rajpoot
- **Project:** Food Application v1.0.0
- **Status:** Active Development

For issues, questions, or suggestions:
- 🐛 GitHub Issues: [Create an issue]
- 💬 Discussions: [Join community]

---

<div align="center">

**Made with ❤️ by Anuj Rajpoot**

⭐ If you find this project helpful, please consider giving it a star!

[Back to top](#-food-application)

</div>
