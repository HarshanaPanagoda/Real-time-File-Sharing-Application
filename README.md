# Real-Time File Sharing Application

This is a simple real-time file sharing application built using JavaScript, Node.js, Express, and Socket.IO. It allows users to securely share files between two parties in real-time over a network.

## Features

- Secure File Sharing: Files are shared securely between sender and receiver using Socket.IO for real-time communication.

- Real-Time Updates: Users receive real-time updates on file transmission progress.

- Simple Interface: User-friendly interface for easy file sharing experience.

## Installation

Clone the repository:

```bash
git clone https://github.com/HarshanaPanagoda/Real-time-File-Sharing-Application.git
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

## How to Test

Upon initiating the server, access the application through your web browser.

#### 1. Sender Side:

- Open http://localhost:5000/ in a web browser.
- Click on "Create Room" to generate a unique room ID
- Copy the id paste it in receiver side input field.
- Select files for sharing by clicking on "Click here to select files for sharing" and choose the desired file.

#### 2. Receiver Side:

- Open the URL http://localhost:5000/receiver.html in the same web browser or in a different browser.
- Enter the Room ID provided by the sender, in the "Room ID" input field.
- Click on "Connect Room" to join the room and start receiving files.

## Files

- server.js: Node.js file containing the server-side logic using Express and Socket.IO.

- index.html: HTML file for sender interface.

- receiver.html: HTML file for receiver interface.

- code.js: JavaScript file containing the client-side logic for both sender and receiver.

- receiver.js: JavaScript file containing the client-side logic for receiver.

- style.css: CSS file for styling the application.

## Dependencies

- Express: Web application framework for Node.js.

- Socket.IO: Real-time bidirectional event-based communication library.

- HTTP: HTTP server module for Node.js.

- Path: Utility module for handling file paths.
