import express, { Express } from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Game } from "@/gameEngine/gameLogic";
import { WebSocketServer, WebSocket } from "ws";
import {discordRouter, gameRouter} from "@/routes/router";
import { initializeDatabase } from "@/database/database";
import { join } from "@/events/gameEvents";

dotenv.config({ path: "../.env" });

const app: Express = express();
const httpServer = createServer(app);
const port = 3001;

// Allow express to parse JSON bodies
app.use(express.json());
app.use("/", discordRouter);
app.use("/", gameRouter);


httpServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

//initializeDatabase();

export const games: Record<string, Game> = {};


// Initialisation de WebSocket
const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws: WebSocket) => {
    console.log("Client connecté");

    ws.on("message", async(data: string) => {
         
        const message : {type: string, data: unknown} = JSON.parse(data);

        switch(message.type){
            case "join":
                join(ws,message.data as { type: string, instance: string, access_token: string })
                break;
        }
    });

    
    ws.on("activityClosed", (data: { token: string, instanceId: string }) => {
        games[data.instanceId].removePlayerByToken(data.token);
        console.log("Activity closed");
    })

    ws.on("close", () => {
        console.log("Client déconnecté");
    });
});