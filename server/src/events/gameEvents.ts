import { WebSocket } from "ws";
import { Game } from "@/gameEngine/gameLogic";

export default function registerGameEvents(ws: WebSocket, games: Record<string, Game>) {
    // Événement pour rejoindre une partie
    ws.on("join", (data: { type: string, instance: string, id: string }) => {
        games[data.instance].getPlayersByID(data.id)
        console.log(`${ws} rejoint la partie en tant que  : ${data.type === "player" ? "joueur" : "spectateur"}`);
    });
}
