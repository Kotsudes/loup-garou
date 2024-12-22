import { Router, Request, Response } from "express";

const tokenRouter = Router();


tokenRouter.post("/join", async (req: Request, res: Response) => {
    // Make the user join the socker.io room with the same Instance ID as the one in the request
    // This is to allow the user to receive updates from the instance
    const instanceId = req.body.instanceId;
    const userId = req.body.userId;
    const socket = req.app.get('socket');
    socket.join(instanceId);
    socket.to(instanceId).emit('userJoined', userId);
    res.send({ success: true });
});

export default tokenRouter;