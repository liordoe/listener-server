import { Router } from 'express';
import * as path from 'path';
import APIRouter from '~/routes/APIRouter';

const router = Router();

router.use('/api', APIRouter);
router.use('/*', (req, res) => res.sendFile(path.join(process.env.OUTPUT_PATH, 'index.html')));

export default router;
