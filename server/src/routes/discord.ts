import { Router } from 'express';
import token from '@/routes/discord/token';

const discordRouter = Router();

// Préfixer les routes Discord avec `/discord`
discordRouter.use('/discord', token);

export default discordRouter;
