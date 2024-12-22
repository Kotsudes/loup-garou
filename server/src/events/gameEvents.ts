import { Server, Socket } from 'socket.io';

export default function registerGameEvents(io: Server, socket: Socket) {
    // Événement pour rejoindre une partie
    socket.on('join_game', (data) => {
        console.log(`${socket.id} rejoint la partie : ${data.gameId}`);
        socket.join(data.gameId); // Rejoindre une salle
        io.to(data.gameId).emit('player_joined', { playerId: socket.id });
    });

    // Événement pour démarrer une partie
    socket.on('start_game', (data) => {
        console.log(`Démarrage de la partie : ${data.gameId}`);
        io.to(data.gameId).emit('game_started', { gameId: data.gameId });
    });
}
