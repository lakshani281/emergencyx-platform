import { Server, Socket } from 'socket.io';

interface LocationPayload {
  requestId: string;
  lat: number;
  lng: number;
}

export const setupSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('⚡ Client connected via WebSocket:', socket.id);

    // Citizen සහ Responder එකම Request ID එකට සම්බන්ධ වීම
    socket.on('join_tracking', (requestId: string) => {
      socket.join(requestId);
      console.log(`📍 User joined tracking room: ${requestId}`);
    });

    // Responder ගේ Live GPS දත්ත ලැබී Citizen වෙත යැවීම
    socket.on('send_responder_location', (data: LocationPayload) => {
      io.to(data.requestId).emit('receive_responder_location', {
        lat: data.lat,
        lng: data.lng,
        updatedAt: new Date()
      });
    });

    socket.on('disconnect', () => {
      console.log('❌ Client disconnected:', socket.id);
    });
  });
};