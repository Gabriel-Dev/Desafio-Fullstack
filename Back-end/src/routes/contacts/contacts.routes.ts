import { Router } from 'express';
import { createContactController, deleteContactController, readContactsController, retriveContactController, updateContactController } from '../../controllers/contacts/contacts.controllers';
import { ensureContactEmailNoExists } from '../../middlewares/ensureContactEmailNoExists.middlewares';
import { ensureValidToken } from '../../middlewares/ensureValidToken.middlewares';
import { ensureValidateData } from '../../middlewares/ensureValidData.middlewares';
import { requestContactSchema, updateContactSchema } from '../../schemas/contacts/contacts.schemas';
import { ensureContactExists } from '../../middlewares/ensureContactExists.middlewares';

export const contactRoutes: Router = Router()

contactRoutes.post('', ensureValidToken, ensureValidateData(requestContactSchema), ensureContactEmailNoExists, createContactController)
contactRoutes.get('', ensureValidToken, readContactsController)
contactRoutes.get('/:id', ensureValidToken, ensureContactExists, retriveContactController)
contactRoutes.patch('/:id', ensureValidToken, ensureContactExists, ensureValidateData(updateContactSchema), updateContactController)
contactRoutes.delete('/:id', ensureValidToken, ensureContactExists,deleteContactController)