import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
    connected: false,
});

export const socket = io("http://localhost:3001", {
    autoConnect: false
});

socket.on("connect", () => {
    state.connected = true;
});

socket.on("disconnect", () => {
    state.connected = false;
});