# Society_Management

google_docs_link 
  https://docs.google.com/document/d/1X5iTwkH4_p50qtKgmAETFOg7k76KoY9ScKZ8Hn1U_ZY/edit


Project Structure

**1. Folder Structure**
fullstack-project/
│
├── backend/               # Backend Python API (Flask or Django)
│   ├── app.py             # Main Python script for backend
│   ├── config/            # Configuration files (e.g., database setup)
│   ├── controllers/       # Business logic (optional for Flask)
│   ├── models/            # Database models (e.g., using SQLAlchemy or Django ORM)
│   ├── routes/            # API routes (e.g., Flask blueprints)
│   ├── virtualenv/        # Python virtual environment
│   ├── requirements.txt   # Backend dependencies
│   ├── .env               # Environment variables for backend
│   └── Dockerfile         # Optional: Docker setup for backend
│
├── frontend/              # Frontend React Application
│   ├── public/            # Static assets (index.html, favicon, etc.)
│   ├── src/               # React source files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # React pages
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # React entry point
│   └── package.json       # Frontend dependencies
│
├── database/              # Database-related files
│   ├── schema.sql         # SQL file to set up the initial database schema
│   ├── seed.sql           # SQL file to seed initial data
│
└── README.md              # Project documentation


**2. Backend Setup (Python - Flask or Django)**
Here’s an example setup using Flask for the backend with MySQL.

a. Install Dependencies: Inside the backend/ folder, create a virtual environment and install Flask and MySQL dependencies:
cd backend
python3 -m venv venv
source venv/bin/activate
pip install flask mysql-connector-python python-dotenv

b. Basic Flask Server Setup: Create app.py in the backend/ folder for the Flask server.
# backend/app.py
from flask import Flask, jsonify
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables

app = Flask(__name__)

# Database connection
def get_db_connection():
    connection = mysql.connector.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database=os.getenv('DB_NAME')
    )
    return connection

# Sample route
@app.route('/')
def index():
    return jsonify({"message": "Flask backend is running!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

c. Environment Variables: Create a .env file in the backend/ folder:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase

d. Install MySQL: Ensure MySQL is installed and create the database using schema.sql and seed.sql in the database/ folder.


**3. Frontend Setup (React)**
Inside the frontend/ folder, set up a React app:

Create React App:

npx create-react-app frontend
cd frontend
Make API Requests to Backend: In src/App.js, you can use fetch or axios to call the Flask API:

import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    );
}

export default App;


**4. Database Setup (MySQL)**
In the database/ folder:

Create schema.sql for the database schema:
CREATE DATABASE yourdatabase;
USE yourdatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

Create seed.sql to insert sample data:
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');


**5. Running the Project**
Backend (Flask): Inside the backend/ folder, activate the virtual environment and run the Flask server:
bashsource venv/bin/activate
python app.py

Frontend (React): Inside the frontend/ folder:
npm start
