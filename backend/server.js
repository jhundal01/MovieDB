const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");


// Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectDB();

//route files
const movies = require('./routes/movies')

const app = express();

//Body parser
app.use(express.json());
// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: false }));

//Mount routers
app.use('/api/v1/movies',movies);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`.yellow.bold);
});

//Handle unhandled promise rejections

process.on(`unhandledRejection`, (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server
  server.close(() => process.exit(1));
});
