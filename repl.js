// import userModel from "./Models/user.model.js";
import repl from 'repl';
import fs from 'fs';
import path from 'path';
import mongoose from "mongoose";
const server = repl.start('> ');
server.context.fs = fs;
server.context.path = path;
import connectDB from "./Configs/db.js";
import 'dotenv/config'

server.context.UserModel = userModel;
connectDB();


// Handle REPL exit
server.on('exit', async () => {
  console.log('Closing MongoDB connection...');
  await mongoose.disconnect();
  console.log('MongoDB connection closed. Goodbye! 99');
  process.exit(0); // Exit the process
});

// Alternatively, handle process signals (e.g., CTRL+C)
process.on('SIGINT', async () => {
  console.log('\nSIGINT received. Closing MongoDB connection...');
  await mongoose.disconnect();
  console.log('MongoDB connection closed. Goodbye!  55');
  process.exit(0);
});
