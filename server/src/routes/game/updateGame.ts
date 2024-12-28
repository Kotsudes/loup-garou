import { games } from "@/server";
import { Router, Request, Response } from "express";

const update = Router();

update.post("/:gameId", async (req: Request, res: Response) => {
    const access_token = req.params["gameId"];
   
    games[access_token].setRoles(req.body.roles);

    res.send({ success: true });
});

export default update;
