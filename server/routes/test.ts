import { Router } from 'express';
import { isAdmin, verifyToken } from '../authJwt';
import { adminBoard, allAccess, userBoard } from '../controllers/test';

const router = Router();

router.get('/all', allAccess);
router.get('/user', verifyToken, userBoard);
router.get('/admin', verifyToken, isAdmin, adminBoard);

export const userRoutes = router;
