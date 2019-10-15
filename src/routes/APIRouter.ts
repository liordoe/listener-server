import { Router } from 'express';

const router = Router();

router.use('*', (req, res) => res.status(404).send('Wrong api url'));

export default router;
