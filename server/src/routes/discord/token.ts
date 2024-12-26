import { Router, Request, Response } from "express";
import { getDiscordAccessToken } from "@/libs/discord";
import { db } from "@/database/database";


const tokenRouter = Router();

tokenRouter.post("/token", async (req: Request, res: Response) => {
    const access_token = await getDiscordAccessToken(req.body.code);
    const newUser = db.prepare("INSERT INTO users (access_token) VALUES (?)");
    newUser.run(access_token);

    // Return the access_token to our client as { access_token: "..."}
    res.send({ access_token });
});

export default tokenRouter;
