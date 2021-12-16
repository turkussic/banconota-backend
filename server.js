const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./api/routes/index");

const app = express();
const http = require("http");
const path = require("path");

const server = http.createServer(app);

// // Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Connect to db
connectDB();

// Set morgan if dev enviroment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

// Set port
const PORT = process.env.PORT || 3000;

server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
