AI Email Generator
Description
This project is an AI-powered email generator that utilizes Google APIs to generate email content. The backend is built with Node.js and Express, with various middleware for authentication, environment management, and API integration.
![Screenshot 2025-02-19 005332](https://github.com/user-attachments/assets/d3f1aad2-9a1e-49f9-8d1c-8cb039f5b453)
![Screenshot 2025-02-19 005344](https://github.com/user-attachments/assets/51e40a7e-35fe-45f8-b4d8-67f5d8630ee2)
![Screenshot 2025-02-19 005357](https://github.com/user-attachments/assets/192a26d4-015a-482f-a05f-2b394f35429f)
![Screenshot 2025-02-19 011525](https://github.com/user-attachments/assets/5b8cc99a-3ed5-4bf1-b74b-86776a3c7782)

Features
User authentication with JWT

Integration with Google APIs for AI-based email generation

CORS enabled for cross-origin requests

Environment variables managed using dotenv

Installation
Navigate to the backend directory:

cd backend
Install dependencies:

npm install
Dependencies
Ensure the following Node.js packages are installed:

npm install cors dotenv jsonwebtoken googleapis
Usage
Start the server using nodemon:

nodemon server.js
The backend will run on http://localhost:5000 (or as specified in .env).

Environment Variables
Create a .env file in the backend directory and add:

PORT=5000
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_google_api_key
