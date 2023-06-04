import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';
import { AppDataSource } from '../data-source';

export const ensureContactOwner = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const clientRepository: Repository<Client> =AppDataSource.getRepository(Client);

    const client_id : number= request.client.id
    const id: number = Number(request.params.id)

    const client = await clientRepository.findOne({
        where: {
          id: client_id,
        },
      });

    console.log(19, client)

    // if (!client!.contacts.find((contact)=>contact.id == id)) {
    //     throw new AppError('Insufficient permission', 403)
    // }

    return next()
}