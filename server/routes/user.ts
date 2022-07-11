import { Router } from 'express';
import { signup } from '../controllers/user';
import { checkDuplicateUsernameOrEmail } from '../verifySignUp';

const router = Router();

router.post('/signup', checkDuplicateUsernameOrEmail, signup);

export const userRoutes = router;
