import { Router } from 'express';
import { loginController } from '../../controllers/login/login.controllers';
import { ensureValidateData } from '../../middlewares/ensureValidData.middlewares';
import { loginSchema } from '../../schemas/login/login.schemas';

export const loginRoutes: Router = Router()

loginRoutes.post('', ensureValidateData(loginSchema), loginController)