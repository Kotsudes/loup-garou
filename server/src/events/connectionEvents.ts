import { WebSocket } from "ws";
import { Game } from "@/gameEngine/gameLogic";

export default function registerConnectionEvents(ws: WebSocket, games: Record<string, Game>) {

    ws.on("authenticate", async (data: { token: string, instanceId: string }, callback) => {
        const { token, instanceId } = data;

        if (!token) {
            return callback({ success: false, message: "Token manquant" });
        }

        if (!instanceId) {
            return callback({ success: false, message: "Instance manquante" });
        }

        try {
            // Vérification du token avec l'API Discord
            const response = await fetch("https://discord.com/api/v10/users/@me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                return callback({ success: false, message: "Token invalide ou expiré" });
            }

            const user = await response.json();

            // Vérifier si une partie associée à l'instance existe
            if (!games[instanceId]) {
                games[instanceId] = new Game(instanceId);
            }

            // Ajouter le joueur à la partie
            games[instanceId].addPlayer(token, user.username, user.avatar);


            console.log(`Utilisateur authentifié : ${user.username}`);

            // Réponse au client
            return callback({ success: true, user: user.username });
        } catch (err) {
            console.error("Erreur lors de l'authentification :", err);
            return callback({ success: false, message: "Erreur interne" });
        }
    });
}