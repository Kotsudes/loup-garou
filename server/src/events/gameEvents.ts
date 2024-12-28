import { Game } from "@/gameEngine/gameLogic";
import { games } from "@/server";
import { Villager } from "@/gameEngine/roles/player";
import { WebSocket } from "ws";

export async function join (ws: WebSocket, data: { type: string, instance: string, access_token: string }) {
    if (!data.access_token || !data.instance) {
        return;
    }

    try {
        // Vérification du token avec l'API Discord
        const response = await fetch("https://discord.com/api/v10/users/@me", {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
            },
        });

        if (!response.ok) {
            return;
        }

        const user = await response.json();

            
        if(!games[data.instance]) {
            games[data.instance] = new Game(data.instance);
        }


        // Ajouter le joueur à la partie
        if(data.type === "player") {
            const player = new Villager(data.access_token, user.username, user.avatar)
            player.webSocket = ws;
            games[data.instance].addPlayer(player);
        }
        else {
            games[data.instance].spectators.push(ws);
        }

        console.log(`${user.username} rejoint la partie en tant que : ${data.type === "player" ? "joueur" : "spectateur"}`);

           
    } catch (err) {
        console.error("Erreur lors de l'authentification :", err);
    }
};

