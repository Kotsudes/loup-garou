import { Router } from "express";
import token from "@/routes/discord/token";
import update from "@/routes/game/updateGame";

export const discordRouter = Router();
export const gameRouter = Router();

// Préfixer les routes Discord avec `/discord`
discordRouter.use("/discord", token);
gameRouter.use("/game", update);

