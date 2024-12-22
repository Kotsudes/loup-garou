import { Router, Request, Response } from "express";
import fetch from "node-fetch";

const tokenRouter = Router();


tokenRouter.post("/token", async (req: Request, res: Response) => {

    // Exchange the code for an access_token
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: process.env.VITE_DISCORD_CLIENT_ID || "",
            client_secret: process.env.DISCORD_CLIENT_SECRET || "",
            grant_type: "authorization_code",
            code: req.body.code,
        }),
    });

    // Retrieve the access_token from the response
    // @ts-expect-error The response is a JSON object
    const { access_token } = await response.json();

    // Return the access_token to our client as { access_token: "..."}
    res.send({ access_token });
});

export default tokenRouter;