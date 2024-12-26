// import { defineStore } from "pinia";
// import { socket } from "@/socket";
// import { ref } from "vue";
// import { auth } from "@/main";
// import { createEvent } from "@/lib/utils";

// export const useConnectionStore = defineStore("connection", () => {
//     const isConnected = ref(false)

//     function identify() {
//         socket.send(createEvent("authenticate", { token: auth?.access_token, instanceId: import.meta.env.VITE_DISCORD_CLIENT_ID }));
//         console.log("Identifying with token")
//     }

//     return { isConnected, identify }
// });
