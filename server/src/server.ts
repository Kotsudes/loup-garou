import express, { Express } from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import { Game } from "@/gameEngine/gameLogic";
import discordRouter from '@/routes/discord';
import registerUserEvents from '@/events/userEvents';
import registerGameEvents from '@/events/gameEvents';

dotenv.config({ path: "../.env" });

const app: Express = express();
const httpServer = createServer(app);
const port = 3001;

// Allow express to parse JSON bodies
app.use(express.json());
app.use("/api", discordRouter);

httpServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


const games: Record<string, Game> = {};

// Initialisation de Socket.IO
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    }
});

// Quand un client se connecte
io.on('connection', (socket) => {
    console.log(`Joueur connecté : ${socket.id}`);

    // Enregistrer les événements dans des fichiers séparés
    registerUserEvents(io, socket);
    registerGameEvents(io, socket);

    // Déconnexion d'un joueur
    socket.on('disconnect', () => {
        console.log(`Utilisateur déconnecté : ${socket.id}`);
    });
});