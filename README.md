# MERN_Auth

This project is a boilerplate template for MERN (MongoDB, Express, React, Node.js) stack applications with JWT authentication. It provides a solid foundation for building secure web applications with user authentication functionality.

## Features

- User registration and login
- JWT (JSON Web Token) based authentication
- Secure password hashing using bcrypt
- Input validation using validator.js
  
- MongoDB for data storage
- Express.js backend API & Node.js server environment

- Protected routes in React
- React frontend with React Router for navigation
- React Context and Hooks for auth state management
- Tailwind CSS for styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 
- npm
- MongoDB 

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```
   cd ../client
   npm install
   ```

4. Create a `.env` file in the server directory and add your MongoDB connection string(set up your mongoDB cluster before) and JWT secret(any secret string will suffice):
   ```
   PORT=some_sample_port_number
   MONGODB_URI=your_mongodb_connection_string
   SECRET=your_jwt_secret
   ```

5. Start the server:
   ```
   cd ../server
   npm start
   ```

6. In a new terminal, start the client:
   ```
   cd ../client
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to see the application running.(It generally opens automatically)

## Key Components

### Client-side

- `AuthContext.js`: Creates the authentication context and provides the auth state to the app.
- `UseAuthContext.js`: Custom hook to use the AuthContext.
- `UseLogin.js`, `UseLogout.js`, `UseSignUp.js`: Custom hooks for authentication actions.
- `navbar.js`: Navigation component with conditional rendering based on auth state.

### Server-side

- `userSchema.js`: Defines the user model and includes methods for signup and login.
- `userController.js`: Handles user-related operations (signup, login, etc.).
- `requireAuth.js`: Middleware to protect routes that require authentication.

## API Endpoints

- POST `/api/user/signup` - Register a new user
- POST `/api/user/login` - Login user

## Authentication Flow

1. User signs up or logs in through the frontend.
2. Server validates the request and creates/authenticates the user.
3. Server sends a JWT token upon successful authentication.
4. Client stores the token in localStorage and updates the AuthContext.
5. Protected routes check the AuthContext before rendering.

