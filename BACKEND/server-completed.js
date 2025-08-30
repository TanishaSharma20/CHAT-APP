import { uniqueNamesGenerator, colors, names } from "unique-names-generator";
import express from "express";
import http from "http";
import { Server } from "socket.io"; // 1. Import socket.io

const app = express(); // 2. Initialize express app
const server = http.createServer(app); // 3. Create HTTP server
const io = new Server(server); // 4. Initialize socket.io with HTTP server

let chatHistory = []; // 5. Create chat history array

// listen for new web socket connections
io.on("connection", function callback(socket) {
  // generate a random, unique username
  const username = getUniqueUsername();

  // send the chat history and username to the client
  socket.emit("receive-messages", {
    chatHistory: getAllMessages(),
    username,
  });

  // listen for new messages from the client
  socket.on("post-message", function receiveMessages(data) {
    // update the chat history with the message and username
    chatHistory.push({
      username,
      message: data.message,
    });

    // send the updated chat history to all clients
    io.emit("receive-messages", {
      chatHistory: getAllMessages(),
    });
  });

  // listen for disconnects and log them
  socket.on("disconnect", () => {
    console.log(`${username} disconnected`);
  });
});

// Boilerplate code as well as Bonus section
app.use(express.static(process.cwd() + "/frontend"));

app.get("/", (req, res) => {
  return res.sendFile(process.cwd() + "/frontend/index.html");
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});

// helper functions
function getAllMessages() {
  return Array.from(chatHistory).reverse();
}

function getUniqueUsername() {
  return uniqueNamesGenerator({
    dictionaries: [names, colors],
    length: 2,
    style: "capital",
    separator: " ",
  });
}
