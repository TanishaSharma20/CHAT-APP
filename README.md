# Real-time Chat Application

A real-time, browser-based chat application built with Node.js, Express, and Socket.IO. It allows users to connect to a chat room, where they are assigned a unique, random username and can send and receive messages instantly.

## Features

- **Real-time Messaging**: Messages are sent and received in real-time using WebSockets.
- **Unique Usernames**: Each user is automatically assigned a unique, randomly generated username upon connecting.
- **Simple UI**: The frontend is styled using Tailwind CSS for a clean and responsive user experience.

## Technologies Used

### Frontend:
- HTML
- JavaScript (ES6+)
- Tailwind CSS
- Socket.IO (client-side library)

### Backend:
- Node.js
- Express.js
- Socket.IO (server-side library)
- unique-names-generator (Node.js package)

## Installation & Setup

1. **Clone or download the project files** into a directory

2. **Initialize a new Node.js project**:
   ```bash
   npm init -y
3. **Install required dependencies:
   ```bash
   npm install express socket.io unique-names-generator
4. **Start the server:
   ```bash
   node server-completed.js
5. **Access the application:
    Open your browser and navigate to http://localhost:3000
## Usage
Open the application in multiple browser windows/tabs to simulate different users

Each user will be assigned a random username automatically

Type messages in the input field and press Enter to send

All connected users will see messages in real-time

## Deployment
This full-stack application can be deployed on various platforms:

Heroku: Requires Procfile and proper port configuration

Vercel: Using serverless functions for the backend

Traditional cloud providers: AWS, Google Cloud, Azure, or DigitalOcean with Node.js support
