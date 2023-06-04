import { createClientController, deleteClientController, readClientsController, retriveClientController, updateClientController } from '../../controllers/clients/clients.controllers';
import { ensureClientEmailNoExists } from '../../middlewares/ensureClientEmailNoExists.middlewares';
import { ensureValidToken } from '../../middlewares/ensureValidToken.middlewares';
import { ensureValidateData } from '../../middlewares/ensureValidData.middlewares';
import { requestClientSchema, updateClientSchema } from '../../schemas/clients/clients.schemas';
import { ensureClientExists } from '../../middlewares/ensureClientExists.middlewares';
import { ensureClientOwner } from '../../middlewares/ensureClientOwner.middlewares';
import { Router } from 'express';

export const clientRoutes: Router = Router()

clientRoutes.post('', ensureValidateData(requestClientSchema), ensureClientEmailNoExists, createClientController)
clientRoutes.get('', ensureValidToken, readClientsController)
clientRoutes.get('/:id', ensureValidToken, ensureClientExists, ensureClientOwner, retriveClientController)
clientRoutes.patch('/:id', ensureValidToken, ensureClientExists, ensureClientOwner, ensureValidateData(updateClientSchema), updateClientController)
clientRoutes.delete('/:id', ensureValidToken, ensureClientExists, ensureClientOwner, deleteClientController)
