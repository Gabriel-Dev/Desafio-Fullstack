import { z } from 'zod'
import { loginSchema } from '../../schemas/login/login.schemas';

export type ILogin = z.infer<typeof loginSchema>

