import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { Client } from '../entities/client.entity'

export const ensureClientExists = async (request: Request, response: Response, next: NextFunction) => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOne({
        where: {
            id: Number(request.params.id)
        }
    })

    if (!findClient) {
        throw new AppError('User not found', 404)
    }

    return next()

}
