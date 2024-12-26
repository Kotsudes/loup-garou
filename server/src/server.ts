import express, { Express } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Game } from "@/gameEngine/gameLogic";
import { WebSocketServer, WebSocket } from "ws";
import discordRouter from "@/routes/discord";
import registerConnectionEvents from "@/events/connectionEvents";
import registerGameEvents from "@/events/gameEvents";
import { initializeDatabase } from "@/database/database";

import { Server } from "socket.io";


dotenv.config({ path: "../.env" });

const app: Express = express();
const httpServer = createServer(app);
const port = 3001;

// Allow express to parse JSON bodies
app.use(express.json());
app.use("/", discordRouter);


// TEST
const io = new Server(httpServer, { /* options */ });
io.on("connection", (socket) => {
    console.log("a user connected",socket);  
});

httpServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

initializeDatabase();

export const games: Record<string, Game> = {};


// Initialisation de WebSocket
const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws: WebSocket) => {
    console.log("Client connecté");

    registerConnectionEvents(ws, games);
    registerGameEvents(ws, games);

    ws.on("activityClosed", (data: { token: string, instanceId: string }) => {
        games[data.instanceId].removePlayerByToken(data.token);
        console.log("Activity closed");
    })

    ws.on("close", () => {
        console.log("Client déconnecté");
    });
});