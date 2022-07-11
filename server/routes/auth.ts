import { Router } from 'express';
import { signin, signup } from '../controllers/auth';
import { checkDuplicateUsernameOrEmail } from '../verifySignUp';

const router = Router();

router.post('/signup', checkDuplicateUsernameOrEmail, signup);
router.post('/signin', signin);

export const authRoutes = router;
