// import { defineStore } from "pinia";
// import { socket } from "@/socket";
// import { auth } from "@/main";
// import { createEvent } from "@/lib/utils";

// export const useGameStore = defineStore("game", () => {

//     function join(type: PlayerStatus,) {
//         socket.send(createEvent("join", { type: type, instance: import.meta.env.VITE_DISCORD_CLIENT_ID, id: auth?.access_token }));
//         console.log("Joining as", type)
//     }

//     return { join };
// });


// export enum PlayerStatus {
//     PLAYER = "player",
//     SPECTATOR = "spectator"
// }
