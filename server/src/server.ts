import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { setupSocketHandlers } from './socketHandler';
import shelterRoutes from './routes/shelterRoutes';
import { createIncidentRoutes } from './routes/incidentRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. HTTP Server & Socket.io Server සෑදීම
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // සියලු Frontend ports සඳහා ඉඩ දීම
    methods: ['GET', 'POST', 'PATCH']
  }
});

// 2. Socket.io Handlers සම්බන්ධ කිරීම
setupSocketHandlers(io);

// 3. API Routes
app.use('/api/shelters', shelterRoutes);
app.use('/api/incidents', createIncidentRoutes(io));

// 4. MongoDB Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/emergencyx';
mongoose.connect(MONGO_URI)
  .then(() => console.log('🍃 MongoDB Atlas Connected Successfully!'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 EmergencyX Server & WebSockets running on port ${PORT}`);
});